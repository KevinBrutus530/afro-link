import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInput } from "../util/useInput";
import { getAPI } from "../util/getAPI";
import axios from "axios";

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
      debugger;
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
    <div style={{ color: "white" }}>
      <form onSubmit={submitReviews}>
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
          type="text"
          placeholder="1-5"
          name="rating"
          {...ratings}
          required
        />
        <button type="submit" className="reviewBtn">
          Submit
        </button>
      </form>
      <h2>Reviews</h2>
      <ul style={{ listStyleType: "none" }}>{showReviews}</ul>
    </div>
  );
};

export default ReviewsForm;
