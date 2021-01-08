const router = require('express').Router();
const { CustomTrivia } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async(req, res) => {
    console.log(req.body);
    try {
        const newCustomTrivia = await CustomTrivia.create({
            ...req.body,
            incorrect_answers: JSON.stringify([req.body.waOne, req.body.waTwo, req.body.waThree]),
            user_id: req.session.user_id,
        });

        res.status(200).json(newCustomTrivia);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async(req, res) => {
    try {
        const customData = await CustomTrivia.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!customData) {
            res.status(404).json({ message: 'No project found with this id!' });
            return;
        }

        res.status(200).json(customData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;