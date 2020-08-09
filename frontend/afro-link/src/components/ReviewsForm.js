import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInput } from "../util/useInput";
import { getAPI } from "../util/getAPI";
import axios from "axios";
import "../css/ReviewsForm.css";

const ReviewsForm = () => {
  const API = getAPI();
  const { id } = useParams();
  const name = useInput("");
  const text = useInput("");
  const [allReviews, setAllReviews] = useState([]);
  // const ratings = useInput("");
  const [ratings, setRating] = useState(null);
  const [hover, setHover] = useState(null);


  const getReviews = async () => {
    try {
      let res = await axios.get(`http://localhost:3000/reviews/${id}`);
      setAllReviews(res.data.payload);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  const submitReviews = async (e) => {
    e.preventDefault();
    // debugger;
    try {
      await axios.post(`${API}/reviews`, {
        review_id: id,
        name: name.value,
        text: text.value,
        ratings: ratings,
      });
      getReviews();
    } catch (err) {
      console.log(err);
    }
  };


  let starsShow = (ratings) => {
    let starsList = [];
    for (let i = 1; i <= ratings; i++) {
      starsList.push(<span className="fa fa-star"></span>);
    }
    for (let i = 1; i <= 5 - ratings; i++) {
      starsList.push(<span className="fa fa-star-o"></span>);
    }
    return starsList;
  };

  let showReviews = allReviews.map((post, i) => {
    debugger
    return (
      <div style={{ color: "white" }} key={i} className="ReviewSect">
        <h5>{post.name.toUpperCase()}</h5>
        <div className="ratings">
          {starsShow(post.ratings)}
        </div>
        <p className="review"> {post.text}</p>
      </div>
    );
  });

  return (
    <div className="reviewsForm">
      <h2>Reviews</h2>
      <form className="reviewsInputs" onSubmit={submitReviews}>
        <label>Name: </label>
        <input
          type="text"
          placeholder="Leave your name..."
          name="name"
          {...name}
          required
        />
        <label>Review: </label>
        <input
          type="text"
          placeholder="comments..."
          name="comment"
          {...text}
          required
        />

        <label>Rating: </label>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i} className="ratingsSec">
              <input
                type="radio"
                className="ratingRadio"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <span className="fa fa-star-o" style={ratingValue<=(hover||ratings)?{"color":"red"}:{"color":"white"}}
              onMouseEnter={()=>setHover(ratingValue)}
                onMouseLeave={()=>setHover(null)}
                onClick={() => setRating(ratingValue)}


                ></span>
            </label>
          );
        })}

        <button className="Btn-create" type="submit" id="reviewsBtn">
          Submit
        </button>
      </form>

      <ul style={{ listStyleType: "none" }}>{showReviews}</ul>
    </div>
  );
};

export default ReviewsForm;
