const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    title: "音乐播放器",
    resizable: true
  });

  // 加载你的 HTML
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);