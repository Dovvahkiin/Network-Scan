import { app } from "electron";
import centralizedApp from "./services/appservice.js";

const { readyApp, closeApp } = centralizedApp(app);

readyApp();
closeApp();
