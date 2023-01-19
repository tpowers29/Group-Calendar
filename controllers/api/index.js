const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
// possible for future feature 
const postsRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/event', eventRoutes);
router.use('/posts', postsRoutes);

module.exports = router;
