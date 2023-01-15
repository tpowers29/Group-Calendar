const User = require('./User');
const Event = require('./Event');
const Posts = require('./Posts');
//const Post = require('./Post');

// Event belongsTo User
Event.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
// Categories have many Products
User.hasMany(Posts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Posts.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
// Categories have many Products
User.hasMany(Event, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { 
    User, 
    Event };
