const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { User, Spot, Booking, Review } = require('../../db/models');

router.get('/', asyncHandler( async (req, res) => {
    const spots = await Spot.findAll();
    return res.json(spots);
}));

router.get('/:id', asyncHandler(async function(req, res) {
  const id = req.params.id;
  const spot = await Spot.findByPk(id, {
    include: [{ model: Booking, required: false, where: { spotId: id } }, { model: Review, required: false, where: { spotId: id } }],
  });
  
  return res.json(spot);
}));

router.get('/:id/reviews', asyncHandler(async (req, res) => {
  const id = req.params.id
  const reviews = await Review.findAll({where: {spotId: id}, include: User });

  return res.json(reviews);
}));

router.post('/:id/post/review', asyncHandler(async (req, res) => {
    const spotId = req.params.id;
    const { authorId, rating, body } = req.body;

    const review = await Review.build({
      authorId: authorId,
      spotId: spotId,
      rating: rating,
      body: body,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await review.save();

    const newReview = await Review.findOne({where: {id: review.id}, include: User});
    return res.json(newReview);
}));

router.post('/book', asyncHandler(async (req, res) => {
    const { userId, spotId, startDate, endDate } = req.body;

    const booking = await Booking.build({
      userId: userId,
      spotId: spotId,
      startDate: startDate,
      endDate: endDate,
      createdAt: new Date(),
    });

    await booking.save();

    return res.json(booking);
}));

module.exports = router;