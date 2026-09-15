import { execFile } from "node:child_process";
import { NMAP_PATH, NETWORK } from "../config/electron.js";

const scanNetwork = () => {
  return new Promise((resolve, reject) => {
    execFile(NMAP_PATH, ["-sn", "-oX", "-", NETWORK], (error, stdout) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout);
    });
  });
};

export default scanNetwork;
