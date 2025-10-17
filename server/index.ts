import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// API route
app.get('/api', (req: Request, res: Response) => {
  res.json({ 
    message: 'Hello from Express + TypeScript on Vercel!',
    timestamp: new Date().toISOString()
  });
});

// Serve a simple HTML page
app.get('/', (req: Request, res: Response) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>My Portfolio</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 40px; }
            h1 { color: #333; }
        </style>
    </head>
    <body>
        <h1>Welcome to My Portfolio</h1>
        <p>Express.js + TypeScript running on Vercel!</p>
        <button onclick="fetchData()">Test API</button>
        <div id="result"></div>
        
        <script>
            async function fetchData() {
                try {
                    const response = await fetch('/api');
                    const data = await response.json();
                    document.getElementById('result').innerHTML = 
                        'API Response: ' + JSON.stringify(data);
                } catch (error) {
                    document.getElementById('result').innerHTML = 
                        'Error: ' + error.message;
                }
            }
        </script>
    </body>
    </html>
  `);
});

// Export for Vercel
export default app;

// Start server if running locally
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
