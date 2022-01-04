const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const router = express.Router();
const { ensureAuth } = require('../middleware/auth');
const Volunteer = require('../models/Volunteer');

const ObjectID = mongodb.ObjectID;

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('book route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
    Volunteer.find()
        .then(volunteers => res.json(volunteers))
        .catch(err => res.status(404).json({ novolunteersfound: 'No Volunteers found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
    Volunteer.find({ memberId: req.params.id })
        .then(volunteer => res.json(volunteer))
        .catch(err => res.status(404).json({ novolunteerfound: 'No Volunteer found' }));
});


router.post("/", async (req, res) => {
    try {
        const v = req.body;
        const volunteer = await Volunteer.create(v);
        if (volunteer) {
            return res.status(200).send(volunteer);
        } else {
            return res.status(500);
        }
    } catch (error) {
        console.error(error);
        // return server error
        return res.status(500);
    }
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Volunteer.findByIdAndUpdate(req.params.id, req.body)
        .then(volunteer => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Volunteer.findByIdAndRemove(req.params.id, req.body)
        .then(volunteer => res.json({ mgs: 'Volunteer entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a Volunteer' }));
});




module.exports = router;