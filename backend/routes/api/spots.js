const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { restoreUser, requireAuth } = require ('../../utils/auth');
const { Spot } = require('../../db/models');

router.get('/', asyncHandler( async (req, res) => {
    const spots = await Spot.findAll();
    return res.json(spots);
}));

router.get('/:id', asyncHandler(async function(req, res) {
    const spot = await Spot.findOne(req.params.id);
    return res.json(spot);
  }));


module.exports = router;