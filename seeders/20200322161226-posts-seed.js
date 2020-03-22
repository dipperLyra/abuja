"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Posts",
      [
        {
          title: "This week at Southcreek Centre",
          content:
            "Given the current health situation we are facing all over the world, the activities in the Centre have all been canceled. ",
          createdAt: new Date(),
          updatedAt: new Date(),
          pageId: 1
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
