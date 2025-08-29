const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 5000;

const server = http.createServer((req, res) => {
  // Serve favicon
  if (req.url === '/favicon.ico') {
    const faviconPath = path.join(__dirname, 'apps/client/public/favicon.ico');
    if (fs.existsSync(faviconPath)) {
      const favicon = fs.readFileSync(faviconPath);
      res.writeHead(200, {'Content-Type': 'image/x-icon'});
      res.end(favicon);
      return;
    }
  }

  // Serve HTML for all other routes
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nx React Router App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Inter', sans-serif; margin: 0; padding: 20px; }
          .nav { background: #f0f0f0; padding: 10px; margin-bottom: 20px; }
          .nav a { margin-right: 20px; text-decoration: none; color: #333; }
          .nav a:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <nav class="nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
        </nav>
        <main>
            <h1>Nx React Router Application</h1>
            <p>Welcome to your Nx workspace with React Router v7!</p>
            <p>This is a temporary server while we set up the full development environment.</p>
            <p>The application includes:</p>
            <ul>
                <li>React 19 with TypeScript</li>
                <li>React Router v7 with SSR</li>
                <li>Tailwind CSS</li>
                <li>Nx monorepo structure</li>
                <li>Vite build system</li>
            </ul>
        </main>
    </body>
    </html>
  `);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});