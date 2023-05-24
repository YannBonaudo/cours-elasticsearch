export type FilmInput = {
  filmName?: string;
  authorName?: string;
  date?: Date;
};

export type FilmUpdate = {
  filmName?: string;
  authorName?: string;
  date?: Date;
};

export interface Film {
  id: number;
  filmName: string;
  authorName: string;
  date: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
