import React from "react";
import { useInput} from "../util/useInput";
import {Link} from "react-router-dom"
import { getAPI } from "../util/getAPI";
import { useHistory} from 'react-router-dom'
import axios from 'axios'


const SignUp = () => {

    const email = useInput("")
    const password = useInput("")
    const API = getAPI();
    const history = useHistory()

    const handleNewUser = async (e) => {
        e.preventDefault();
        try{
            await axios.post(`${API}/owners/signup`, {
                email: email.value,
                password: password.value
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
                <input type="text" placeholder="password" required {...password}/>
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