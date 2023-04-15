import { Router } from "express";
import { routerUrl } from "../components/url/routes";

export const router = Router();

router.use("/api", routerUrl);
