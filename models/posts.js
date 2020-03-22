"use strict";
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define(
    "Posts",
    {
      title: DataTypes.STRING,
      allowNull: false
    },
    {
      content: DataTypes.STRING,
      allowNull: false
    }
  );
  Posts.associate = function(models) {
    Posts.belongsTo(models.Pages, {
      foreignKey: "pageId",
      onDelete: "CASCADE"
    });
  };
  return Posts;
};
