const router = require('express').Router();
const { Event } = require('../../models');
const withAuth = require('../../utils/auth');


//category_name
//event_description
//location
//event_date
//time_of_event

router.post('/events', withAuth, async (req, res) => {
  try {
    const newEvent = await Event.create({
      ...req.body,
    }) 

    res.status(200).json(newEvent);
  } catch (error) {
    res.status(400).json(error);
  }
}) 

router.get('/events/:categoryName', withAuth, async (req, res) => {
  try {
    const categoryName = req.params.categoryName
    const newEvent = await Event.findAll({
      where: {
        category_name: categoryName 
      }
    }) 

    res.status(200).json(newEvent);
  } catch (error) {
    res.status(400).json(error);
  }
}) 

/*router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});*/

module.exports = router;
