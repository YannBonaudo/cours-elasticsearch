import { Model, Optional } from "sequelize";

interface FilmAttributes {
  id: number;
  filmName: string;
  authorName: string;
  date: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface FilmInput extends Optional<FilmAttributes, "id"> {}

export interface FilmOutput extends Required<FilmAttributes> {}

export class Film
  extends Model<FilmAttributes, FilmInput>
  implements FilmAttributes
{
  public id!: number;
  public filmName!: string;
  public authorName!: string;
  public date!: Date;
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}
