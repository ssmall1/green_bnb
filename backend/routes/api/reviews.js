const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { User, Spot, Booking, Review } = require('../../db/models');

router.get('/:id', asyncHandler(async function(req, res) {
  const reviews = await Review.findAll({
    where: {
      spotId: req.params.id
    }, 
    include: { User },
    order: [['updatedAt', 'DESC']]
  });
  return res.json(reviews);

}))

router.post('/', asyncHandler(async function (req, res) {
    const newReview = await Review.create(req.body);
    return res.json(newReview);
  })
);

module.exports = router;