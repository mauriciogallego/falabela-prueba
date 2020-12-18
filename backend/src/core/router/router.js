import { Router } from "express";
import { revenue } from "../../controllers/revenue.controller";
import { fieldsRequired } from "../../middlewares/fieldsRequired";

export const router = Router();

router.post("/revenue", fieldsRequired(), revenue);
