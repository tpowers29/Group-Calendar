const User = require('./User');
const Posts = require('./Posts');

Posts.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Posts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = {
  User,
  Event,
  Posts,
};
