import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { getAPI } from "../../util/getAPI";
import { AuthContext } from "../../providers/AuthContext";
import { logout } from "../../util/firebaseFunctions";

const ProfilePage = () => {
  let API = getAPI();
  const [ userBusinesses, setUserBusinesses ] = useState([]);
  const { token, currentUser, loading } = useContext(AuthContext);


  useEffect(() => {
    const fetchUserById = async () => {
      let res = await axios({
        method: "get",
        url: `${API}/owners/${currentUser.uid}`,
        headers: {
          AuthToken: token
        }
      });
      setUserBusinesses(res.data.payload)
    };
    fetchUserById();
  }, []);

  let allUserBusinesses = userBusinesses.map(business => {
    return <div>{business.biz_name}</div>
  })

  return (
    <div>
      <h1 style={{ padding: "2em", color: "white" }}> Profile Page</h1>
      <button onClick={logout}>Log Out</button>
      <div>
        {allUserBusinesses}
      </div>
    </div>
  );
};

export default ProfilePage;
