import { Router } from "express";
import chatRoute from "./chat.route.js";
import auth from "./auth.route.js";
const indexRoute = Router();
const prefijox = "chatNeco";

indexRoute.use(`/${prefijox}/chat`,chatRoute)
indexRoute.use(`/${prefijox}/usuario`,auth);

export default indexRoute;