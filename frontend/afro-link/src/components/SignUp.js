import React from "react";
import { useInput} from "../util/useInput";
import {Link} from "react-router-dom"
import { getAPI } from "../util/getAPI";
import { useHistory} from 'react-router-dom'
import { signUp } from '../util/firebaseFunctions';
import axios from 'axios'

const SignUp = () => {

    const email = useInput("")
    const password = useInput("")
    const API = getAPI();
    const history = useHistory()

    const handleNewUser = async (e) => {
        e.preventDefault();
        try{
            let res = await signUp(email.value, password.value);
            await axios.post(`${API}/owners/signup`, {
                user_id: res.user.uid,
                email: email.value
            })
            history.push("/newBusiness")
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div>
             <form className="signUpForm" onSubmit={handleNewUser}>
                <h1> Sign Up </h1>
                <div className="input">
                <label>Email: </label>
                <input type="text" placeholder="email" required {...email}/>
                <input type="password" placeholder="password" required {...password}/>
                <input type="submit" className="submit"/>
                </div>
            </form>
            <form className="user">
                <Link to="/login" className="button">Have An Account? Click Here</Link>
            </form>
        </div>
        
    )
}
export default SignUp;