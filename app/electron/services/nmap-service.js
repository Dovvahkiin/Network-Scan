import { execFile } from "node:child_process";
import { NMAP_PATH, NETWORK } from "../config/electron.js";
import parseNmapResult from "../utils/nmap-parser.js";

const scanNetwork = () => {
  return new Promise((resolve, reject) => {
    execFile(NMAP_PATH, ["-sn", "-oX", "-", NETWORK], (error, stdout) => {
      if (error) {
        reject(error);
        return;
      }
      try {
        const devices = parseNmapResult(stdout);
        resolve(devices);
      } catch (error) {
        reject(error);
      }
    });
  });
};

export default scanNetwork;
