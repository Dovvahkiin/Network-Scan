import { BrowserWindow } from "electron";
import { windowConfig } from "../config/electron.js";

const createWindow = () => {
  const window = new BrowserWindow(windowConfig);

  window.loadURL("http://localhost:5173");
  window.webContents.openDevTools();
};

export default createWindow;
