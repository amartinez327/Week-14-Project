import { useState } from 'react';
import React from 'react';
import MovieArray from './MovieArray';
import ReviewForm from './ReviewForm';//here is my Movie page


function Movie() {

    const [reviews, setReviews] = useState([]);
  
    const addReview = (review) => {
      setReviews([...reviews, review]);
    };
  
    return (
      <div>
        <h1>Movie Reviews</h1>
        <MovieArray />
        <ReviewForm addReview={addReview} />
        <ul>
        </ul>
      </div>
    );
  }
  
  export default Movie;