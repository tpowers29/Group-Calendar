const router = require('express').Router();
const { Posts, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    console.log(req.session.user_id);
    const userData = await User.findByPk(req.session.user_id);

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    console.log('profile', err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/logout', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_out) {
    res.redirect('/login');
    return;
  }

  res.render('logout');
});

router.get('/posts', async (req, res) => {
  console.log('POSTS', req.session);
  try {
    const postData = await Posts.findAll({
      include: [
        {
          model: User,
          where: {
            id: req.session.user_id,
          },
          // attributes: ['firstName'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render('posts', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
