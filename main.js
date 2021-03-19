const { app, BrowserWindow, dialog, ipcMain } = require("electron");
//const fs = require('fs');

let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    minWidth: 1200,
    minHeight: 600,
    width: 1400,
    height: 800,
    backgroundColor: "#ffffff",
    skipTaskbar: true,
    icon: `file://${__dirname}/dist/assets/logo.png`, //TODO: REPLACE ICON
    // frameless is nice but requires more work on our part to build all the prebuilt menu options.
    //frame: false
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      backgroundThrottling: false,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });

  win.loadURL(`file://${__dirname}/dist/index.html`);

  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
  win.on("closed", function () {
    win = null;
  });
}

// Create window on electron initialization
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On macOS specific close process
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // macOS specific close process
  if (win === null) {
    createWindow();
  }
});

ipcMain.on("ping", (event, arg) => {
  console.log(arg); // prints "ping"
  event.returnValue = "pong";
});

// file loading
ipcMain.on("file-load", (event, arg) => {
  try {
    let file = dialog.showOpenDialogSync(win, {properties: ['openFile']});
    event.returnValue = file;
  } catch (error) {
    console.error(error);
  }
});

