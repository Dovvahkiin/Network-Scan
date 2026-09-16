import path from "node:path";
import dotenv from "dotenv";
import { directoryName } from "../utils/dirname.js";

dotenv.config();

const NMAP_PATH = process.env.ENV_NMAP_PATH;
const NETWORK = process.env.ENV_NETWORK;

const windowConfig = {
  width: 800,
  height: 600,
  webPreferences: {
    preload: path.join(directoryName, "preload.js"),
  },
  autoHideMenuBar: true,
  resizable: false,
};

export { windowConfig, NMAP_PATH, NETWORK };
