import { Dialect } from "sequelize";

type Pool = {
  max: number;
  min: number;
  acquire: number;
  idle: number;
};

export type Config = {
  HOST: string;
  USER: string;
  PASSWORD: string;
  DB: string;
  dialect: Dialect | undefined;
  pool: Pool;
};

export const cfg: Config = {
  HOST: "localhost",
  USER: "testuser",
  PASSWORD: "testpassword",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
