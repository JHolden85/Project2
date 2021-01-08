const router = require('express').Router();
const { User, CustomTrivia } = require('../models');
const withAuth = require('../utils/auth');
// This will prevent NON logged in users from viewing the homepage
router.get('/', async (req, res) => {
    try {
        // Get all custom trivia questions to JOIN with user data
        const customData = await CustomTrivia.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        // Serialize data so the handlebars template can read it
        //((custom)) => custom names can be whatever
        const customs = customData.map((custom) =>
            custom.get({
                plain: true,
            })
        );
        //Pass serialized data and session flag into handlebars template
        res.render('homepage', {
            customs,
            //Pass the logged in flag to the handlebars template
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/custom/:id', async (req, res) => {
    try {
        const customData = await CustomTrivia.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const custom = customData.get({ plain: true });

        res.render('custom', {
            ...custom,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Quiz Category Routes
router.get('/music', (req, res) => {
    try {
        res.render('music');
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/movies', (req, res) => {
    try {
        res.render('movies');
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/television', (req, res) => {
    try {
        res.render('television');
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/sports', (req, res) => {
    try {
        res.render('sports');
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/history', (req, res) => {
    try {
        res.render('history');
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/celebrities', (req, res) => {
    try {
        res.render('celebrities');
    } catch (err) {
        res.status(500).json(err);
    }
});

// Custom quiz maker route -- User must be logged in to view
router.get('/quizMaker', (req, res) => {
    try {
        if (req.session.logged_in) {
            res.render('highscore');
            return;
        } else {
            res.redirect('login');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// High Scores route -- User must be logged in to view
router.get('/highscore', (req, res) => {
    try {
        if (req.session.logged_in) {
            res.render('highscore');
            return;
        } else {
            res.redirect('login');
        }
    } catch (err) {
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

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: CustomTrivia }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/end', async (req, res) => {
    try {
        res.render('end');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
