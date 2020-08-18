import React from 'react';
import { logout } from "../../util/firebaseFunctions"

const ProfilePage = () => {
    
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