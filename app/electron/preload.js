const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  test: () => "Electron works!",
  scanNetwork: () => ipcRenderer.invoke("scan-network"),
});
