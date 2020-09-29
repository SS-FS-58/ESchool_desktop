"use strict";

import { app, protocol, BrowserWindow } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS_DEVTOOLS } from "electron-devtools-installer";
const isDevelopment = process.env.NODE_ENV !== "production";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainMenuWindow, loginWindow;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

function createWindow() {
  // Create the browser window.
  mainMenuWindow = new BrowserWindow({
    width: 265,
    height: 78,
    // frame: false,
    // transparent: true,
    alwaysOnTop: true,
    // resizable: false,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
    },
  });
  // Create login windows
  loginWindow = new BrowserWindow({
    width: 412,
    height: 445,
    // frame: false,
    resizable: true,
    transparent: true,
    focusable: true,
    alwaysOnTop: true,
    webPreferences: {
      webSecurity: false
    },
         Parent: mainMenuWindow // mainWindow is the main window

  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    mainMenuWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    loginWindow.loadURL(`http://localhost:8080/#/about/`);
    // console.log(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) mainMenuWindow.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    mainMenuWindow.loadURL("app://./index.html");
    // loginWindow.loadURL("app://./login/");
  }

  mainMenuWindow.on("closed", () => {
    mainMenuWindow = null;
  });
  loginWindow.on("closed", () => {
    loginWindow = null;
  });
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS);
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
