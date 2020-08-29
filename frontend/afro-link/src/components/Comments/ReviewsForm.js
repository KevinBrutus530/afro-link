import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInput } from "../../util/useInput";
import { getAPI } from "../../util/getAPI";
import axios from "axios";
import "../../css/ReviewsForm.css";
import Reply from "./Reply.js"

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
      let res = await axios.get(`${API}/reviews/${id}`);
      // debugger
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
      starsList.push(<span className="fa fa-star" key={i}></span>);
    }
    for (let i = 1; i <= 5 - ratings; i++) {
      starsList.push(<span className="fa fa-star-o" key={i}></span>);
    }
    return starsList;
  };


  let showReviews = allReviews.map((post, i) => {
    if(post.text){
      return (
        <div style={{ color: "white" }} key={post.id} className="ReviewSect">
          <div className="ratings">
            <h5 className="reviewerName">{post.name.toUpperCase()}</h5>
            {starsShow(post.ratings)}
          </div>
          <p className="review"> {post.text}</p>
          <p className="reviewDT">{post.dt.substring(0,10)}</p>
          <div className="reply">
            <Reply allReviews={allReviews} replyID={post.id} />
          </div>
        </div>
      );
    }
  });
 

  return (
    <div className="reviewsForm">
      <h2 className="heavyFont">Reviews</h2>
      <form className="reviewsInputs" onSubmit={submitReviews}>
        <div className="labelInput">
          {" "}
          <label className="labelInput">Name: </label>
          <input
            type="text"
            placeholder="Leave your name..."
            name="name"
            {...name}
            required
          />
        </div>
        <div className="labelInput">
          <label className="labelInput">Review:</label>
          <textarea
            type="text"
            placeholder="Comments..."
            name="comment"
            {...text}
            required
          />
        </div>
        <br></br>
        <div className="rateStarsDiv">
          <label className="rateLabel">Rating: </label>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i} className="ratingsSec">
                <input
                  type="radio"
                  className="ratingRadio"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                  required
                />
                <span
                  className="fa fa-star-o"
                  style={
                    ratingValue <= (hover||ratings)
                      ? { color: "red" }
                      : { color: "#background-color: #1911026b" }
                  }
                  onMouseEnter={()=>setHover(ratingValue)}
                onMouseLeave={()=>setHover(1)}
                onClick={() => setRating(ratingValue)}
                  
                ></span>
              </label>
            );
          })}
        </div>

        <button className="Btn-create" type="submit" id="reviewsBtn">
          Submit
        </button>
      </form>

      <ul className="reviewUL">{showReviews}</ul>
    </div>
  );
};

export default ReviewsForm;
