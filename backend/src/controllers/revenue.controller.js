import { fieldsRequired } from "../middlewares/fieldsRequired";
import fs from "fs";

export function revenue(req, res, next) {
  const { rut, phone, email, salary } = req.body;

  fs.writeFile(
    "src/data/revenue.txt",
    JSON.stringify({ rut, phone, email, salary }),
    (err) => {
      console.log('entro')
      if (err) return res.status(401).json({ message: "error saving data" });
      res.json({ message: "data saved" });
    }
  );
}
