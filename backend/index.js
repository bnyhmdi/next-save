import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS so the React app (on port 5173) can talk to us (on port 5000)
app.use(cors({
  origin: '*', // In production, replace with specific origins
  methods: ['GET', 'POST']
}));

app.use(express.json());

// Main health-check route
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'NextSave API is active' });
});

/**
 * Endpoint to fetch TikTok video metadata and download URLs from TikWM
 * GET /api/download?url=https://www.tiktok.com/...
 */
app.get('/api/download', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing TikTok video URL parameter' });
  }

  try {
    // Call TikWM API with HD option enabled (hd=1)
    const tikwmApiUrl = `https://www.tikwm.com/api/?url=${encodeURIComponent(url.toString())}&hd=1`;
    const response = await axios.get(tikwmApiUrl);
    
    const result = response.data;

    // TikWM returns code 0 for success
    if (result.code === 0 && result.data) {
      const { data } = result;

      // Extract details
      const responseData = {
        id: data.id,
        title: data.title || 'TikTok Video',
        cover: data.cover,
        duration: data.duration,
        // Prefer hdplay (HD without watermark), fallback to normal play (without watermark)
        videoUrl: data.hdplay || data.play,
        isHD: !!data.hdplay,
        audioUrl: data.music,
        author: {
          uniqueId: data.author?.unique_id,
          nickname: data.author?.nickname,
          avatar: data.author?.avatar
        },
        stats: {
          playCount: data.play_count,
          diggCount: data.digg_count,
          commentCount: data.comment_count,
          shareCount: data.share_count
        }
      };

      return res.json(responseData);
    } else {
      return res.status(422).json({ 
        error: result.msg || 'Failed to extract video details from the URL. Please verify the TikTok link.' 
      });
    }
  } catch (error) {
    console.error('Download extraction error:', error.message);
    return res.status(500).json({ 
      error: 'An internal error occurred while communicating with the video downloader networks.' 
    });
  }
});

/**
 * Proxy stream endpoint to handle downloading files directly instead of opening them in a new tab
 * GET /api/stream?url=https://...&title=myfile
 */
app.get('/api/stream', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send('Missing file URL to redirect');
  }

  try {
    // Redirect the user's browser directly to the media CDN URL.
    // This bypasses Vercel's strict 4.5MB serverless response size limit,
    // preventing file corruption on larger videos by letting the browser download
    // directly from the source CDN.
    return res.redirect(302, url.toString());
  } catch (error) {
    console.error('Redirect error:', error.message);
    if (!res.headersSent) {
      res.status(500).send('Failed to redirect to video resource.');
    }
  }
});

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`[NextSave Server] Running on http://localhost:${PORT}`);
  });
}

export default app;
