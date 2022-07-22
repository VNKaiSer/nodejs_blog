const Course = require('../models/Course')

class SiteController {
    index(req, res) {
        Course.find({}, function(err, course) {
            if (!err) {
                res.json(course)
            } else {
                res.status(404).json({ error: 'error' })
            }
        });
        //res.render('home');
    }

    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController;