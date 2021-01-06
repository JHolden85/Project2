const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
// const celebertiesRoutes = require('./celebertiesRoutes');
// const historyRoutes = require('./historyRoutes');
// const moviesRoutes = require('./moviesRoutes');
// const musicRoutes = require('./musicRoutes');
// const sportsRoutes = require('./sportsRoutes');
// const televisionRoutes = require('./televisionRoutes');

// router.use('/celeberties', celebertiesRoutes);
// router.use('/history', historyRoutes);
// router.use('/movies', moviesRoutes);
// router.use('/music', musicRoutes);
// router.use('/sports', sportsRoutes);
// router.use('/television', televisionRoutes);

module.exports = router;