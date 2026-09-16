import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const directoryName = path.dirname(path.dirname(__filename));

export { directoryName };
