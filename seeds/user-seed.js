const { User } = require('../models');

const userData = [
  {
    "id": 1,
    "firstName": "Sal",
    "lastname": "S",
    "email": "sal@hotmail.com",
    "password": "password12345"
  },
  {
    "id": 2,
    "firstName": "Lernantino",
    "lastName": "L",
    "email": "lernantino@gmail.com",
    "password": "password12345"
  },
  {
    "id": 3,
    "firstName": "Amiko",
    "lastName": "A",
    "email": "amiko2k20@aol.com",
    "password": "password12345"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
