"use strict";
module.exports = (sequelize, DataTypes) => {
  const Pages = sequelize.define(
    "Pages",
    {
      name: DataTypes.STRING
    },
    {
      description: DataTypes.STRING
    }
  );
  Pages.associate = function(models) {
    Pages.hasMany(models.Posts, {
      foreignKey: "pageId",
      as: "post"
    });
  };
  return Pages;
};
