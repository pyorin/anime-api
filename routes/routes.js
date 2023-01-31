import express from "express";
import { getAnime, recomendAnime } from "../controller/controller.js";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ message: "sasuga mastah :3" });
});

routes.get("/anime", getAnime);
routes.get("/anime/rec/:name", recomendAnime);

export default routes;
