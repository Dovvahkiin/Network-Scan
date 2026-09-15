const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  test: () => "Electron works!",
});
