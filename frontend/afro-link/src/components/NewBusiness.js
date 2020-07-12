import React, {useState} from 'react'
import {useInput} from "../util/useInput"
import {getAPI} from "../util/getAPI"
import axios from "axios"
import Modal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/Button';
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'

const NewBusiness =()=> {

  const API = getAPI();
  const [modalShow, setModalShow] = React.useState(false);

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
      e.preventDefault()
      try {
        let newBiz = await axios.post(`${API}/businesses`, {
          biz_name: biz_name.value,
          hours: hours.value,
        });
        if(newBiz.data.status==="success"){
          console.log(newBiz.data.payload) 
        }

      } catch (error) {
        alert(error.status)
      }
    }
    const HourTable= (props)=> {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Business Hour
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>available hour</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }

    const handleHours = (e)=>{
      debugger
      setModalShow(true)
    }

        return (
          <div>
            <form className="newBusiness" onSubmit={handleNewBiz}>
              <label>Business Name: </label>
              <input type="text" placeholder="Business Name" required {...biz_name} />

              <label>Hour of Service: </label>
              <select onChange={()=>handleHours()} >
                <option defaultValue="1">Online Store 24/7</option>
                <option defaultValue="2">add businesses hours</option>
              </select>

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
              <>
                <HourTable
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </>
            </form>
          </div>
        );
    }

export default NewBusiness
