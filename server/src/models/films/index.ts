import { cfg } from "../../db/config";
import { initSequelize } from "../sqlInit";
import { DataTypes } from "sequelize";
import { Film } from "../dto/film";

class SqlFilmAdapter {
  constructor() {
    const sequelizeConnection = initSequelize(cfg);

    Film.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        filmName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        authorName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize: sequelizeConnection,
        paranoid: true,
      }
    );

    sequelizeConnection
      .sync({ force: false })
      .then(() => {
        console.log("Synced db.");
      })
      .catch((err) => {
        console.log("Failed to sync db: " + err.message);
      });
  }
}

export default SqlFilmAdapter;
