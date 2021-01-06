const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
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
router.get('/profile', withAuth, async(req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            //include: [{ model: Project }],
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

module.exports = router;