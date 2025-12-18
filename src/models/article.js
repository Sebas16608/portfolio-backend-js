const sequelize = require("../config/database.js");
const { DataTypes } = require("sequelize");

const Article = sequelize.define("Article", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: 
  }
})
