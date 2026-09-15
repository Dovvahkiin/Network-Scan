import createWindow from "../utils/window.js";

const centralizedApp = (app) => {
  const readyApp = () => {
    app.whenReady().then(() => {
      createWindow();
    });
  };

  const closeApp = () => {
    app.on("window-all-closed", () => {
      if (process.platform !== "darwin") app.quit();
    });
  };

  return { readyApp, closeApp };
};

export default centralizedApp;
