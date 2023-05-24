import SqlFilmAdapter from "../../models/films";
import * as filmDal from "../../models/films/film";
import { FilmOutput, FilmInput } from "../../models/dto/film";
import { FilmUpdate } from "../dto/film";

class FilmContext {
  filmAdapter: SqlFilmAdapter;

  constructor(filmAdapter: SqlFilmAdapter) {
    this.filmAdapter = filmAdapter;
  }

  create = (payload: FilmInput): Promise<FilmOutput> => {
    return filmDal.create(payload);
  };

  update = (id: number, payload: FilmUpdate): Promise<FilmOutput> => {
    return filmDal.update(id, payload);
  };
}

export default FilmContext;
