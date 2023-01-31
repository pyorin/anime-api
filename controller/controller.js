import * as mal from "mal-scraper";

export const getAnime = (req, res) => {
  mal
    .getInfoFromName(req.query.name)
    .then((d) => res.json({ anime: d }))
    .catch((err) => console.log(err));
};

export const recomendAnime = (req, res) => {
  mal
    .getRecommendationsList(req.params.name)
    .then((d) => res.json({ recommend_anime: d }));
};
