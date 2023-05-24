import express from "express";
import cors from "cors";
import FilmContext from "./domain/controllers/admin";
import SQLFilmAdapter from "./models/films";
import initFilmAdapter from "./routes/rest/film";

const corsOptions = {
  origin: "http://localhost:8081",
};
const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sqlFilmAdapter = new SQLFilmAdapter();
const filmContext = new FilmContext(sqlFilmAdapter);
const filmRoutes = initFilmAdapter(filmContext);

app.use("/api/films", filmRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`);
});

export default app;
