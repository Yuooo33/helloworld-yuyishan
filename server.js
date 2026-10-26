// server.js
// Node.js 原生 HTTP 服务器，无需任何第三方依赖

const http = require('http');

const PORT = 3000;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
  // 每次请求都取一次最新的服务器时间，保证浏览器看到的是实时时间
  const now = new Date();
  const timeStr = now.toLocaleString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hello World - YYS</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
                   "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #ffffff;
      padding: 24px;
    }
    .card {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.25);
      border-radius: 20px;
      padding: 48px 56px;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
      max-width: 640px;
      width: 100%;
    }
    h1 {
      font-size: 28px;
      line-height: 1.5;
      margin-bottom: 28px;
      font-weight: 600;
    }
    .badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.25);
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 14px;
      margin-bottom: 24px;
      letter-spacing: 1px;
    }
    .time-label {
      font-size: 14px;
      opacity: 0.85;
      margin-bottom: 8px;
      letter-spacing: 2px;
    }
    .time-value {
      font-size: 32px;
      font-weight: 700;
      font-variant-numeric: tabular-nums;
      letter-spacing: 1px;
    }
    .divider {
      width: 60px;
      height: 2px;
      background: rgba(255, 255, 255, 0.5);
      margin: 28px auto;
      border: none;
    }
    .footer {
      margin-top: 28px;
      font-size: 13px;
      opacity: 0.75;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">Node.js Server</div>
    <h1>Hello World！我是【YYS】，我的第一个AI开发的网站</h1>
    <hr class="divider" />
    <div class="time-label">当前服务器时间</div>
    <div class="time-value">${timeStr}</div>
    <div class="footer">Powered by Node.js ${process.version}</div>
  </div>
</body>
</html>`;

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
});

server.listen(PORT, HOST, () => {
  console.log('==========================================');
  console.log(`  HelloWorld (YYS) 服务器已启动`);
  console.log(`  本地访问:   http://localhost:${PORT}`);
  console.log(`  局域网访问: http://<本机IP>:${PORT}`);
  console.log(`  按 Ctrl + C 停止服务`);
  console.log('==========================================');
});
