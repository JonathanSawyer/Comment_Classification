var express    = require('express');  
var router     = express.Router();  
var Comment    = require('./models/comment');

router.route('/comments')

    .post(function(req, res) {
        
        var comment = new Comment();      
        comment.name = req.body.name;  

        comment.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Comment created!' });
        });
        
    })

    .get(function(req, res) {
        Comment.find(function(err, comments) {
            if (err)
                res.send(err);

            res.json(comments);
    })
     .put(function(req, res) {

        Comment.findById(req.params.comment_id, function(err, comment) {

            if (err)
                res.send(err);

            comment.name = req.body.name;  

            comment.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Comment updated!' });
            });

        });
    })
    .delete(function(req, res) {
        Comment.remove({
            _id: req.params.comment_id
        }, function(err, comment) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });
});
router.route('/comments/:comment_id')
    .get(function(req, res) {
        Comment.findById(req.params.comment_id, function(err, comment) {
            if (err)
                res.send(err);
            res.json(comment);
        });
    });