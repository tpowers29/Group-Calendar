const User = require('./User');
const Event = require('./Event');
const Posts = require('./Posts');
//const Post = require('./Post');

Posts.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Posts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Event.belongsTo(Posts, {
  foreignKey: 'posts_id',
});

Posts.hasMany(Event, {
  foreignKey: 'posts_id',
});

module.exports = { 
    User, 
    Event,
    Posts};
