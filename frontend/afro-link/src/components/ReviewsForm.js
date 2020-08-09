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
  // const [form, setForm] = useState({});
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
    debugger
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
  let createStar =(ratings)=>{
    
  }

  let starsShow = (ratings)=>{
    let starsList=[]
    for (let i=1; i<=ratings; i++){
      starsList.push(
        <span className="fa fa-star"></span>
      )
    }
    for (let i=1; i<=(5-ratings); i++){
      starsList.push(
        <span className="fa fa-star-o"></span>
      )
    }
    return starsList
  }
  

  let showReviews = allReviews.map((post, i) => {
    return (
      <div style={{ color: "white" }} key={i} className="ReviewSect">
        <h5>{post.name}</h5>
        <div className="ratings">
          {starsShow(post.ratings)}
        </div>
        <p> {post.text}</p>
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
        <label>Rating</label>
        <input
          type="range"
          // placeholder="1-5"
          name="ratings"
          min="1"
          max="5"
          defaultValue="3"
          {...ratings}
          required
        />
        <p>{ratings.value}</p>
        <button className="Btn-create" type="submit" id="reviewsBtn">
          Submit
        </button>
      </form>

      <ul style={{ listStyleType: "none" }}>{showReviews}</ul>
    </div>
  );
};

export default ReviewsForm;
