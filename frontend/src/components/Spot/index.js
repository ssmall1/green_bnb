import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Redirect } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import * as spotReducer from '../../store/spot';
import Reviews from '../Reviews/';

import './Spot.css';

function Spot() { 
    const dispatch = useDispatch();
    const { id } = useParams();
    const [body, setBody] = useState('');
    const [rating, setRating] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [booked, setBooked] = useState(false);
    const [bookingError, setBookingError] = useState('');
    const [renderedReviews, setRenderedReviews] = useState([]);

    const sessionUser = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spots.currentSpot);
    const reviews = useSelector(state => state.spots.reviews);
    
    const updateBody = (e) => setBody(e.target.value);
    const updateRating = (e) => setRating(e.target.value);

    
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(spotReducer.getSpots());
    }, [dispatch]);

    useEffect(() => { 
        dispatch(spotReducer.getReviews(id));
        dispatch(spotReducer.getOneSpot(id));
    }, [id, dispatch]);

    useEffect(() => {
        console.log(reviews)
        if (reviews) {
            function listings(reviews) {
                for (let i = 0; i < 4; i++) {
                    let review = reviews[i]
                    if (review) {
                    setRenderedReviews(prevReviews => [...prevReviews, review]); 
                    }
                }
            }
            listings(reviews);
        }
    }, [reviews])

    if (!sessionUser) return (
        <Redirect to='/welcome' />
    );

    if (!spot) {
        return null;
    };

    if (!reviews) {
        return null
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authorId = sessionUser.id;
        const payload = {
            id,
            authorId,
            rating,
            body
        };
        setBody('');
        await dispatch(spotReducer.postReview(payload))
    }

    const handleBook = async (e) => {
        e.preventDefault();

        if (startDate > endDate) {
            return setBookingError("Start Date must be before End Date");
        }

        else if (startDate.toDateString() === endDate.toDateString()) {
            return setBookingError("Start Date and End Date must be different");
        }

        const userId = sessionUser.id;
        const payload = {
            userId: userId,
            spotId: id,
            startDate: startDate,
            endDate: endDate
        };

        await dispatch(spotReducer.postBooking(payload))
        setBookingError("");
        setStartDate(new Date());
        setEndDate(new Date());
        return setBooked(true);
    }

    return(
        <div className="spot">
            <div id="single-spot" className="spot-container">
                <div id="spot-image">
                    <img src={spot.imageUrl} alt="spot"></img>
                </div>
                <div id="spot-information">
                    <div id="spot-title">{spot.title}</div>
                    <div id="spot-location">{spot.city}, {spot.state} {spot.zip}</div>
                    <div id="spot-price">
                        ${spot.price} / night
                    </div>
                </div>
                <div id="spot-features-title">
                    Features and Amenities Include:
                </div>
                <div id="spot-features">
                    {spot.ecoFeatures}
                </div>
                <div id="spot-description-title">
                    The Space:
                </div>
                <div id="spot-description">
                    {spot.description}
                </div>

                <div className="review-form-wrapper">
                    <form id="review-form" onSubmit={handleSubmit}>
                        <label>
                            Make a Review
                        </label>
                        <div>
                            <textarea type='text-area' value={body} onChange={updateBody} required></textarea>
                        </div>
                        <div>
                            <label>
                                Rating
                                <select onChange={updateRating}>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <button className="review-button" type='submit'>Submit Review</button>
                        </div>
                    </form>
                </div>
                <div className="reviews">
                    <div id="review-title"> Recent Reviews </div>
                    {renderedReviews.map(review => {
                        return (
                            <Reviews review={review} key={spot.id + review.id}/>
                        )
                    })}
                </div>

                <div className="booking-form">
                    <form onSubmit={handleBook}>
                        <div className="booking-label">Book This Spot 🏠</div>
                        <div className="booking-label">
                            Start Date
                            <DatePicker
                                className='date-picker'
                                onChange={setStartDate}
                                value={startDate}
                            />
                        </div>
                        <div className="booking-label">
                            End Date   
                            <DatePicker
                                className='date-picker'
                                onChange={setEndDate} 
                                value={endDate}
                            />
                        </div>
                        <button className="book" type='submit'>Book</button>
                    </form>
                    { booked ? <div id="booked-msg">Get Ready For Your Adventure!!</div> : <></> }
                    { bookingError ? <div id="booked-msg">{bookingError}</div> : <></> }
                </div>
            </div>
        </div>
    )
}

export default Spot;