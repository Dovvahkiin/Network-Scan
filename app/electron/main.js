import { app, ipcMain } from "electron";
import centralizedApp from "./services/appservice.js";
import scanNetwork from "./services/nmap-service.js";

const { readyApp, closeApp } = centralizedApp(app);

readyApp();

ipcMain.handle("scan-network", async () => {
  return await scanNetwork();
});

closeApp();
