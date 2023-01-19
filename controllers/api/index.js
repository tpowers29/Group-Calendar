const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const postsRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/event', eventRoutes);
router.use('/posts', postsRoutes);

module.exports = router;
