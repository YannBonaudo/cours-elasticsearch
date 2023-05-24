import { FilmUpdate } from "../../domain/dto/film";
import { FilmInput, FilmOutput, Film } from "../dto/film";

export const create = async (payload: FilmInput): Promise<FilmOutput> => {
  const film = await Film.create(payload);

  return film;
};

export const update = async (
  id: number,
  payload: FilmUpdate
): Promise<FilmOutput> => {
  const film = await Film.findByPk(id);

  if (!film) {
    throw new Error("no film found");
  }

  const updatedFilm = await film.update(payload);
  return updatedFilm;
};
