import path from "node:path";
import { directoryName } from "../utils/dirname.js";

const windowConfig = {
  width: 800,
  height: 600,
  webPreferences: {
    preload: path.join(directoryName, "preload.js"),
  },
  autoHideMenuBar: true,
  resizable: false,
};

export { windowConfig };
