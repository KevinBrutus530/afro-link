import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { getAPI } from "../../util/getAPI";
import { AuthContext } from "../../providers/AuthContext"
import { logout } from "../../util/firebaseFunctions"

const ProfilePage = () => {
    let API = getAPI();
    const {
        token,
        currentUser,
        loading
    } = useContext(AuthContext)

    useEffect(()=> {
        const fetchUserById = async () => {
            let res = await axios({
              method: "get",
              url: `${API}/owners/${currentUser.uid}`,
              headers: {
                AuthToken: token
              }
            });
            console.log(currentUser.uid, "current uid");
            // setUser(res.data.user);
            console.log(res.data.user);
          };
          fetchUserById();
      
      
    }, [])

    return (
    <div>
        <h1 style={{ "padding" : "2em", "color" : "white" }}> Profile Page</h1>
        <button onClick={logout}>
        Log Out
        </button>

    </div>
    )
}

export default ProfilePage