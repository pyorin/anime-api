import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(routes);

app.listen(6969, () => {
  console.log("server jalan!");
});
