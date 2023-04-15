import { Router } from "express";
import { getRedirectUrl, postSaveUrl } from "./controller";
import {
	invalidIndexMidd,
	invalidUrlMidd,
} from "../../middlewares/error.middleware";

export const routerUrl = Router();

routerUrl.post("/shorturl", postSaveUrl);
routerUrl.get("/shorturl/:index", getRedirectUrl);

routerUrl.use(invalidUrlMidd);
routerUrl.use(invalidIndexMidd);
