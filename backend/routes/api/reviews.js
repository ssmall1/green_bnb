const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { User, Spot, Booking, Review } = require('../../db/models');

router.get('/:id', asyncHandler(async function(req, res) {
  const reviews = await Review.findAll({
    where: {
      spotId: req.params.id
    }, 
    include: { User, Spot },
    order: [['updatedAt', 'DESC']]
  });
  return res.json(reviews);

}))

router.post('/', asyncHandler(async function (req, res) {
    const review = await Review.create(req.body);
    const newReview = await Review.findOne({
      where: {
        id: id
      },
      include: { User, Spot }
    });
    return res.json(newReview);
  })
);


module.exports = router;