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
  const ratings = useInput("");

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
    try {
      await axios.post(`${API}/reviews`, {
        review_id: id,
        name: name.value,
        text: text.value,
        ratings: ratings.value,
      });
      getReviews();
    } catch (err) {
      console.log(err);
    }
  };

  let showReviews = allReviews.map((post, i) => {
    return (
      <div style={{ color: "white" }} key={i} className="ReviewSect">
        <h5>{post.name}</h5>
        <p> {post.text}</p>
        <p>{post.ratings}</p>
      </div>
    );
  });

  return (
    <div className="reviewsForm" >
      <h2>Reviews</h2>
      <form className="reviewsInputs" onSubmit={submitReviews}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Name..."
          name="name"
          {...name}
          required
        />
        <label>Text:</label>
        <input
          type="text"
          placeholder="Text..."
          name="comment"
          {...text}
          required
        />
        <label>Ratings</label>
        <input
          type="number"
          placeholder="1-5"
          name="rating"
          min="1"
          max="5"
          {...ratings}
          required
        />
        <button className="Btn-create" type="submit" id="reviewsBtn">
          Submit
        </button>
      </form>

      <ul style={{ listStyleType: "none" }}>{showReviews}</ul>
    </div>
  );
};

export default ReviewsForm;
