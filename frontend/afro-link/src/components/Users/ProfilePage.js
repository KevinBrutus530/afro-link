import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { getAPI } from "../../util/getAPI";
import { AuthContext } from "../../providers/AuthContext";
import { logout } from "../../util/firebaseFunctions";
import { useHistory } from "react-router-dom";
import "../../css/DisplayBusiness.css";

const ProfilePage = () => {
  let history = useHistory();
  let API = getAPI();
  const [userBusinesses, setUserBusinesses] = useState([]);
  const { token, currentUser, loading } = useContext(AuthContext);
  const redirectToEdit = (id) => history.push(`/editbusiness/${id}`);

  useEffect(() => {
    const fetchUserById = async () => {
      let res = await axios({
        method: "get",
        url: `${API}/owners/${currentUser.uid}`,
        headers: {
          AuthToken: token,
        },
      });
      setUserBusinesses(res.data.payload);
    };
    fetchUserById();
  }, []);

  // const handleSubmit = () => {

  // }

  let allUserBusinesses = userBusinesses.map((business) => {
    // create a function that calls the reviews from each business
    // create function in spearate component using the business id as a prop
    return (
      <div>
        <div className="ownerHeader">{business.biz_name}</div>
        <div className="businessInfo">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <img className="bizPicProfile" src={business.pictures} />
            </li>
            <li className="bizAddress">
              {business.street} {business.city} {business.state} {business.zip}
            </li>
            <li className="bizHours">{business.hours}</li>

            <li className="hyperLink">
              <a href={business.website} target="_blank">
                Visit Website
              </a>
            </li>
          </ul>
          <div className="contactInfo">
            <ul>
              <label id="contactsLabel">Contact Info: </label>
              <li>{business.phone}</li>
              <li>{business.email}</li>

              <li className="hyperLink">
                <a href={business.social_media} target="_blank"></a>
              </li>
            </ul>
            <button onClick={() => redirectToEdit(business.id)}>
              Edit Business
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1 style={{ padding: "2em", color: "white" }}> Profile Page</h1>
      <button onClick={logout}>Log Out</button>
      <div>{allUserBusinesses}</div>
    </div>
  );
};

export default ProfilePage;
