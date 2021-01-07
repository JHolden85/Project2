const router = require('express').Router();
const userRoutes = require('./userRoutes');
const customRoutes = require('./customRoutes');

router.use('/users', userRoutes);
router.use('/customs', customRoutes);

module.exports = router;