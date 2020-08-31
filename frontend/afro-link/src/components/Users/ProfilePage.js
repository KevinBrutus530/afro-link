import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { getAPI } from '../../util/getAPI';
import { AuthContext } from '../../providers/AuthContext';
import { logout } from '../../util/firebaseFunctions';
import BusinessDisplay from './BusinessDisplay';
import '../../css/DisplayBusiness.css';
import '../../css/ProfilePage.css';

const ProfilePage = () => {
  let API = getAPI();
  const [userBusinesses, setUserBusinesses] = useState([]);
  const { token, currentUser, loading } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserById = async () => {
      let res = await axios({
        method: 'get',
        url: `${API}/owners/${currentUser.uid}`,
        headers: {
          AuthToken: token,
        },
      });
      setUserBusinesses(res.data.payload);
    };
    fetchUserById();
  }, []);
  console.log(userBusinesses);
  return (
    <div className="profilePageMainDiv">
      <div className="profileHeader">
        <h1 className="profileTitle"> Profile Page</h1>
        <button className="Btn-create loBtn" onClick={logout}>Log Out</button>
      </div>
      <BusinessDisplay userBusinesses={userBusinesses} />
    </div>
  );
};

export default ProfilePage;
