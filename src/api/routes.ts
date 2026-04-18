import { Router } from "express";
import { simulate } from "./controllers";

const router = Router();

// POST /simulate — accepts { xdr, network } and returns footprint + cost
router.post("/simulate", simulate);

export default router;
