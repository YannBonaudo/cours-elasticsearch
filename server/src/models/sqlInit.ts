import { Sequelize } from "sequelize";
import { Config } from "../db/config";

export const initSequelize = (config: Config) => {
  const sequelizeConnection = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
      host: config.HOST,
      dialect: config.dialect,

      logging: false,

      pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
      },
    }
  );

  return sequelizeConnection;
};
