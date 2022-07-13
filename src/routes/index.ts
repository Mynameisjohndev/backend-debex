import { Router } from "express";
import { athleteEvents } from "./athleteEvents.routes";

const routes = Router();

routes.use(athleteEvents);

export { routes };