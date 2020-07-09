import React from 'react'
import {useInput} from "../util/useInput"
// import {getAPI} from "../util/getAPI"
import axios from "axios"

const NewBusiness =()=> {

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

    const handleNewBiz =(e)=>{
        return null
    }

        return (
          <div>
            <form className="newBusiness" onSubmit={handleNewBiz}>
              <label>Business Name: </label>
              <input type="text" placeholder="Business Name" {...biz_name} />

              <label>Hour: </label>
              <input type="text" placeholder="Business Hours" {...hours} />

              <label>Business Owner: </label>
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
              <table>
                <tr>
                  <td class="label">Street address</td>
                  <td class="slimField">
                    <input class="field" id="street_number" {...street}/>
                  </td>
                  <td class="wideField" colspan="2">
                    <input class="field" id="route" />
                  </td>
                </tr>
                <tr>
                  <td class="label">City</td>
                  <td class="wideField" colspan="3">
                    <input class="field" id="locality" {...city}/>
                  </td>
                </tr>
                <tr>
                  <td class="label">State</td>
                  <td class="slimField">
                    <input
                      class="field"
                      id="administrative_area_level_1"
                       {...state}
                    />
                  </td>
                  <td class="label">Zip code</td>
                  <td class="wideField">
                    <input class="field" id="postal_code" {...zip}/>
                  </td>
                </tr>
              </table>

              <button type="submit">
                <span>Create Business</span>
              </button>
            </form>
          </div>
        );
    }

export default NewBusiness
