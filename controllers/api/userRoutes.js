const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.firstName = userData.firstName
      
      res.status(200).json(userData);
    });
    console.log("Signup",userData,req.session)
  } catch (err) {
    console.log("signup",err)
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.firstName = userData.firstName
      res.json({ user: userData, message: 'You are now logged in!' });
    });
    console.log(req.session)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
  console.log(req.session)
});

module.exports = router;
