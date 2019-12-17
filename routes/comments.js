const express = require('express');
const router = express.Router({mergeParams: true});
const fakeComments = require('../data/comments');

router.get('/', (req, res) => {
    const postId = Number(req.params.postId);
    const postComments = fakeComments.filter((comment) => comment.post_id === postId);
    res.json(postComments);
  });

module.exports = router;
