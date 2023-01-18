const { Posts } = require('../models');

const postsData = [
  {
    id: '1',
    content:'Hello',
    topic: 'Test',
    // user_id: '1',
  },
  {
    id: '2',
    content: 'Howdy',
    topic: 'Test 02',
    // user_id: '2',
  },
  {
    id: '3',
    content: 'Longer string to see what happens',
    topic: 'Test 03',
    // user_id: '3',
  },
  {
    id: '4',
    content: 'Differenet content same Topic 03',
    topic: 'Test 03',
    // user_id: '4',
  },
];

const seedPosts = () => Posts.bulkCreate(postsData);

module.exports = seedPosts;
