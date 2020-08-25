import React, { useContext, useEffect } from "react";
import axios from "axios";
import { getAPI } from "../../util/getAPI";
import { AuthContext } from "../../providers/AuthContext";
import { logout } from "../../util/firebaseFunctions";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { id } = useParams();
  let API = getAPI();
  const { token, currentUser, loading } = useContext(AuthContext);


  useEffect(() => {
    const fetchUserById = async () => {
      let res = await axios({
        method: "get",
        url: `${API}/owners/${currentUser.uid}`,
        headers: {
          AuthToken: token,
        }
      });
      debugger
    };
    fetchUserById();
  }, []);

  return (
    <div>
      <h1 style={{ padding: "2em", color: "white" }}> Profile Page</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default ProfilePage;
