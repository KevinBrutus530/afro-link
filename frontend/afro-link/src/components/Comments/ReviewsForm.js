import React, { useState, useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useInput } from '../../util/useInput';
import { AuthContext } from '../../providers/AuthContext';
import { getAPI } from '../../util/getAPI';
import axios from 'axios';
import '../../css/ReviewsForm.css';
import Reply from './Reply.js';
import VerifiedOwner from './VerifiedOwner';

const ReviewsForm = () => {
  const API = getAPI();
  const { token, currentUser, loading } = useContext(AuthContext);
  const [userBusinesses, setUserBusinesses] = useState([]);
  const { id } = useParams();
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [allReviews, setAllReviews] = useState([]);
  const [ratings, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const getReviews = async () => {
    try {
      let res = await axios.get(`${API}/reviews/${id}`);
      setAllReviews(res.data.payload);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  const handleInput = (e, setValue) => {
    e.preventDefault();
    setValue(e.target.value)
  };

  const submitReviews = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/reviews`, {
        review_id: id,
        name: name,
        text: text,
        ratings: ratings,
      });
      getReviews()
      setName("")
      setText("")
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

  const fetchUserById = async () => {
    try {
      let res = await axios({
        method: 'get',
        url: `${API}/owners/${currentUser.uid}`,
        headers: {
          AuthToken: token,
        },
      });
      setUserBusinesses(res.data.payload);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserById();
  }, []);

  let showReviews = allReviews.map((post, i) => {
    if (post.text) {
      return (
        <div style={{ color: 'white' }} key={post.id} className="ReviewSect">
          <div className="ratings">
            <h5 className="reviewerName">{post.name.toUpperCase()}</h5>
            {starsShow(post.ratings)}
            <p className="reviewDT">{post.dt.substring(0, 10)}</p>
          </div>
          <p className="review"> {post.text}</p>
          <div className="reply">
            <VerifiedOwner
              userBusinesses={userBusinesses}
              post={post}
              getReviews={getReviews}
            />
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
          {' '}
          <label className="labelInput">Name: </label>
          <input
            type="text"
            placeholder="Leave your name..."
            name="name"
            onChange={(e) => handleInput(e, setName)}
            value={name}
            required
          />
        </div>
        <div className="labelInput">
          <label className="labelInput">Review:</label>
          <textarea
            type="text"
            placeholder="Whats on your mind..."
            name="text"
            onChange={(e) => handleInput(e, setText)}
            value={text}
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
                    ratingValue <= (hover || ratings)
                      ? { color: 'red' }
                      : { color: 'black' }
                  }
                  onMouseEnter={() => setRating(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                  required

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
