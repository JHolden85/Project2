const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/play', (req, res) => {
    try {
        res.render('quiz');
    } catch (err) {
        res.status(500).json(err);
    }
});

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
        res.redirect('/');
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
            include: [{ model: Project }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
