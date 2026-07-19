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
  const { url, title, type } = req.query;

  if (!url) {
    return res.status(400).send('Missing file URL to stream');
  }

  try {
    const isMp3 = type === 'mp3';
    const ext = isMp3 ? '.mp3' : '.mp4';
    const contentType = isMp3 ? 'audio/mpeg' : 'video/mp4';
    
    // Clean filename characters to avoid file save errors
    // 1. Create a safe ASCII fallback filename
    const asciiTitle = title 
      ? title.toString().replace(/[^\x20-\x7E]/g, '').replace(/[/\\?%*:|"<>\s]+/g, '_')
      : '';
    const fallbackFilename = `${asciiTitle.slice(0, 50) || (isMp3 ? 'tiktok_audio' : 'tiktok_video')}${ext}`;
    
    // 2. Create the full UTF-8 filename supporting emojis and non-latin scripts
    const utf8Title = title 
      ? title.toString().replace(/[/\\?%*:|"<>\s]+/g, '_') 
      : (isMp3 ? 'tiktok_audio' : 'tiktok_video');
    const utf8Filename = `${utf8Title.slice(0, 50)}${ext}`;

    // Set headers with RFC 5987 compliance for UTF-8 filenames in HTTP headers
    res.setHeader('Content-Disposition', `attachment; filename="${fallbackFilename}"; filename*=UTF-8''${encodeURIComponent(utf8Filename)}`);
    res.setHeader('Content-Type', contentType);

    // Fetch the raw media stream from the CDN server and pipe it directly to our Express response
    const mediaResponse = await axios({
      method: 'get',
      url: url.toString(),
      responseType: 'stream',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://www.tikwm.com/'
      }
    });

    mediaResponse.data.pipe(res);
  } catch (error) {
    console.error('Streaming error:', error.message);
    if (!res.headersSent) {
      res.status(500).send('Failed to stream audio/video resource.');
    }
  }
});

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`[NextSave Server] Running on http://localhost:${PORT}`);
  });
}

export default app;
