import { app, ipcMain } from "electron";
import centralizedApp from "./services/appservice.js";
import scanNetwork from "./services/nmap-service.js";
import analyze from "./services/devices-analyzer.js";

const { readyApp, closeApp } = centralizedApp(app);

readyApp();

ipcMain.handle("scan-network", async () => {
  const data = await scanNetwork();
  const analized = analyze(data);
  return analized;
});

closeApp();
