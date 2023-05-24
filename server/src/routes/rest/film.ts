import { Router, Request, Response } from "express";
import FilmContext from "../../domain/controllers/admin";

// TODO: find a way to streamline the handling of different errors
const initFilmRoutes = (filmContext: FilmContext) => {
  const filmRouter = Router();

  filmRouter.post("/", async (req: Request, res: Response) => {
    try {
      const data = await filmContext.create(req.body);
      res.send(data);
    } catch (e) {
      if (e) {
        res.status(400).send({
          message: "Message can not be empty!",
        });
      } else {
        res.status(500).send({
          message: "Some error occurred while saving the film.",
        });
      }
    }
  });

  filmRouter.post("/:id", async (req: Request, res: Response) => {
    var id = Number(req.params.id);

    try {
      const data = await filmContext.update(id, req.body);

      res.send(data);
    } catch (e) {
      res.status(500).send({
        message: "Some error occurred while updating films.",
      });
    }
  });

  return filmRouter;
};

export default initFilmRoutes;
