import React, { useState, useEffect } from 'react';

const review = [
    {
        id: 1,
        name: 'susan smith',
        review: 'Yes its pretty good'
    },
    {
        id: 2,
        name: 'anna johnson',
        review: 'Yes its pretty good but 2'
    },
    {
        id: 3,
        name: 'peter jones',
        review: 'Yes its pretty good but 3'
    }
];

function ReviewCarousel() {
    const [currentReviewIndex, setCurrentReview] = useState(0);

    const goToPrevious = () => {
        setCurrentReview((currentReviewIndex - 1 + review.length) % review.length);
    }

    const goToNext = () => {
        setCurrentReview((currentReviewIndex + 1) % review.length);
    }

    useEffect(() => {
        const interval = setInterval(goToNext, 5000);

        return () => clearInterval(interval);
    }, [currentReviewIndex]);

    const currentReview = review[currentReviewIndex];

    return (
        <div className="review-carousel">
            <h1>Review Carousel</h1>
            <div className="review">
                <h2>{currentReview.name}</h2>
                <p>{currentReview.review}</p>
            </div>
            <div className="actions">
                <button onClick={goToPrevious}>Previous</button>
                <button onClick={goToNext}>Next</button>
            </div>
        </div>
    )
}

export default ReviewCarousel;