import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInput } from "../util/useInput";
import { getAPI } from "../util/getAPI";
import axios from 'axios';


const ReviewsForm = () => {
    const API = getAPI();
    const { id } = useParams()
    const name = useInput("");
    const text = useInput("");
    const [allReviews, setAllReviews] = useState([]);
    const ratings =useInput("");

    const getReviews = async () => {
    try {
        debugger
      let res = await axios.get(`{API}/reviews/`);
      debugger
      setAllReviews(res.data.payload);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getReviews();
  },[] );

    const submitReviews = async (e) => {
        e.preventDefault();
        try{
        await axios.post(`${API}/reviews`, {
            review_id: id,
          name: name.value,
          text: text.value,
          ratings: ratings.value

        })
        } catch(err){
            console.log(err)
        }
    }

    let showReviews = allReviews.map((post, i) => {
        return(
            <div key={i} className="ReviewSect">
            <h3>{post.name}</h3>
            <p>{post.text}</p>
            <p>{post.ratings}</p>
            <p>{post.zip}</p>
            </div>
        )
    })

    return(
        <>
        <form onSubmit={submitReviews}>
            <label>Name:</label>
            <input type="text" placeholder="Name..." name="name" {...name} required/>
            <label>Text:</label>
            <input type="text" placeholder="Text..." name="comment" {...text} required/>
            <label>Ratings</label>
            <input type="text" placeholder="1-5" name="rating" {...ratings} required/>
            <button type="submit" className="reviewBtn">Submit</button>
        </form>
        <ul>
            {showReviews}
        </ul>
        </>
    )



}

export default ReviewsForm; 