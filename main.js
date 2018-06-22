'use strict';

// Import parts of electron to use
const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const AppMenu = require('./src/config/Menu').AppMenu
const ContextMenu = require('./src/config/Menu').ContextMenus
let screen = null
const path = require('path')
const url = require('url')
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Keep a reference for dev mode
let dev = false;
if (process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath)) {
  dev = true;
}

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    useContentSize: true,
    height: 700,
    titleBarStyle: 'hiddenInset',
    width: 1160,
    minHeight: 500,
    minWidth: 900,
  });
  //Create the App Menu 
  Menu.setApplicationMenu(AppMenu(mainWindow))
  ContextMenu(mainWindow)


  // and load the index.html of the app.
  let indexPath;
  if (dev && process.argv.indexOf('--noDevServer') === -1) {
    indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:4000',
      pathname: 'index.html',
      slashes: true
    });
  } else {
    indexPath = url.format({
      protocol: 'file:',
      pathname: path.join(__dirname, 'dist', 'index.html'),
      slashes: true
    });
  }
  mainWindow.loadURL(indexPath);

  // Don't show until we are ready and loaded
  mainWindow.webContents.on('did-finish-load', function () {
    screen = require('electron').screen;
    mainWindow.show();
    // Open the DevTools automatically if developing
    if (dev) {
      mainWindow.webContents.openDevTools();
    }
  });

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// Title Bar Behavior
ipcMain.on('maxminwindow', (event) => {
  const screenArea = screen.getPrimaryDisplay().workArea
  const windowArea = mainWindow.getSize()
  if (screenArea.width == windowArea[0] && screenArea.height == windowArea[1]) {
    mainWindow.setSize(1160, 700, true)
  } else {
    mainWindow.maximize()
  }
});