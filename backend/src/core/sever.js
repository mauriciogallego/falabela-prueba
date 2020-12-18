import express from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import { router } from "./router/router";

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(router);
app.use((rep, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
})

export const start = () =>
  new Promise((resolve) => app.listen(process.env.PORT, () => resolve(app)));
