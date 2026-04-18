import express from "express";
import dotenv from "dotenv";
import routes from "./api/routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`stellar-footprint-service running on port ${PORT}`);
});

export default app;
