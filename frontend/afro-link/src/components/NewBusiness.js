import React from 'react'
import {useInput} from "../util/useInput"
import {getAPI} from "../util/getAPI"
import axios from "axios"

const NewBusiness =()=> {

  const API = getAPI();

    const biz_name = useInput("")
    const hours = useInput("")
    const owner_name = useInput("")
    const type_name = useInput("") //add  new function let owner/user create one
    const phone = useInput("")
    const email = useInput("")
    const social_media = useInput("")
    const street = useInput("")
    const city = useInput("")
    const state = useInput("")
    const zip = useInput("")
    const website = useInput("")

    const handleNewBiz = async (e)=>{
      try {
        debugger
        let neeBiz = await axios.post(`${API}/businesses`, {
          biz_name: biz_name.value,
          hours: hours.value,
        });
        console.log(neeBiz.data)
      } catch (error) {
        
      }
        return null
    }

        return (
          <div>
            <form className="newBusiness" onSubmit={handleNewBiz}>
              <label>Business Name: </label>
              <input type="text" placeholder="Business Name" {...biz_name} />

              <label>Hour of Service: </label>
              <input type="text" placeholder="Business Hours" {...hours} />

              <label>Owner Name: </label>
              <input type="text" placeholder="Owner Name" {...owner_name} />

              <label>Types Name: </label>
              <select name="Types Name" {...type_name}>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>

              <label>Contact Number: </label>
              <input type="number" placeholder="Contact Number" {...phone} />

              <label>Email: </label>
              <input type="email" placeholder="Email Address" {...email} />
              <label>Social Media: </label>
              <input type="text" placeholder="Ins/Facebook" {...social_media} />
              <label>Store Page: </label>
              <input type="text" placeholder="Online Website" {...website} />
              <div>
                <div>
                  <span className="label">Street address</span>
                  <span className="slimField">
                    <input className="field" id="street_number" {...street}/>
                  </span>
                  <span className="wideField" colSpan="2">
                    <input className="field" id="route" />
                  </span>
                </div>
                <div>
                  <span className="label">City</span>
                  <span className="wideField" colSpan="3">
                    <input className="field" id="locality" {...city}/>
                  </span>
                </div>
                <div>
                  <span className="label">State</span>
                  <span className="slimField">
                    <input
                      className="field"
                      id="administrative_area_level_1"
                       {...state}
                    />
                  </span>
                  <span className="label">Zip code</span>
                  <span className="wideField">
                    <input className="field" id="postal_code" {...zip}/>
                  </span>
                </div>
              </div>

              <button type="submit">
                <span>Create Business</span>
              </button>
            </form>
          </div>
        );
    }

export default NewBusiness
