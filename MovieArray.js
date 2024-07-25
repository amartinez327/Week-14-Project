import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import img3 from '../images/Dumb1.jpg';//here is my Movie Array page

const MovieArray = () => {
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="review-list-wrapper">
      <button onClick={() => handleAddReview({})}>Add New Review Form</button>
      <br/>
      <img src={img3} alt="Dumb and dumber"/>
      <p>
      Dumb and Dumber is about two friends who drive across the country to return a lost briefcase to a client who left it at the airport. Their journey is hilarious. From trading their “dog” van for a moped to both fighting to get the attention of the owner of the briefcase. The briefcase was left to pay the ransom of kidnapped husband, but the two friends made it difficult for all involved. The adventure of Loyd Christmas (Jim Carry) and Harry Dunn (Jeff Danials) will have you laughing form beginning to end.
      </p>
      {reviews.map((review, index) => (
        <ReviewForm key={index} onSubmit={handleAddReview} />
      ))}
    </div>
  );
};

export default MovieArray;
