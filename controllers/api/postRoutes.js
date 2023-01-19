const router = require('express').Router();
const { Posts } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const posts = await Posts.findAll()
    console.log(posts)
    res.render("posts")
    res.status(200).json(posts);
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
  }
}); 

router.post('/', withAuth, async (req, res) => {
  console.log(req.body,"Post create")
  try {
    const newEvent = await Posts.create({
      ...req.body,user_id:req.session.user_id
    }) 
    console.log("New Post",newEvent)
    res.status(200).json(newEvent);
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
  }
});

router.post('/posts/:postId/react', withAuth, async (req, res) => {
  try {
    const postId = req.params.postId
    const getPostById = await Posts.findOne({
      where:  {
        id: postId
      }
    })

    const newReaction = getPostById.reaction + req.body.reaction

    const postEdit = getPostById.set({
      reaction: newReaction,
    });
    
    await postEdit.save();
    
    res.status(200).json(newEvent);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post('/posts/:postId/edit', withAuth, async (req, res) => {
  try {
    const postId = req.params.postId
    const getPostById = await Posts.findOne({
      where:  {
        id: postId
      }
    })

    const postEdit = getPostById.set({
      comment: req.body.comment,
    });
    
    await postEdit.save();
    
    res.status(200).json(newEvent);
  } catch (error) {
    res.status(400).json(error);
  }
}); 

module.exports = router;