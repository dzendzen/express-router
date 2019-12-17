const express = require('express');
const router = express.Router({mergeParams: true});
const tags = require('../data/tags');
const fakePosts = require('../data/posts');

router.get('/', (req,res) =>{
    res.json(tags);
});

router.get('/:postId', (req, res) => {
    const postId = Number(req.params.postId);
    const postTags = fakePosts.filter((tag) => tag.tag_id === postId);
    res.json(postTags);
  });

module.exports = router;