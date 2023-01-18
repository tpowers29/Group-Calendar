const seedPosts = require('./posts-seeds');
// const seedUser = require('./user-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');
  // await seedUser();
  // console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedAll();