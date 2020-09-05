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
  const [update, setUpdate] = useState(null);

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

  useEffect(() => {
    fetchUserById();
  }, [update]);

  return (
    <div className="profilePageMainDiv">
      <div className="profileHeader">
        <h4 className="profileTitle"> Profile Page</h4>
        <h5 className="profileTitle">{currentUser.email}</h5>
        <button className="Btn-create loBtn" onClick={logout}>
          Log Out
        </button>
      </div>
      <BusinessDisplay
        userBusinesses={userBusinesses}
        editBusiness={setUpdate}
      />
    </div>
  );
};

export default ProfilePage;
