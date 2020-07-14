import React, { Component } from 'react'
import {useInput} from "../util/useInput"
import Modal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/Button';

const TimeTable =(props)=> {
    const workingHours = useInput({})
        const handleInputHour =(e)=>{
        //   debugger              e.preventDefault() 
              console.log(e.currentTarget.value)
        }
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
            <Modal.Body >
            <form >
              <h4>available hour</h4>
              <label>Monday:</label>
              <input type="time" id="Mon" name="Mon" ></input>
              <input type="time" id="Mon" name="Mon" onChange={handleInputHour}></input>
              <label>Tuesday:</label>
              <input type="time" id="Tue" name="Tue"></input>
              <input type="time" id="Tue" name="Tue"></input>
              <label>Wednesday:</label>
              <input type="time" id="Wed" name="Wed"></input>
              <input type="time" id="Wed" name="Wed"></input>
              <label>Thursday:</label>
              <input type="time" id="Thu" name="Thu"></input>
              <input type="time" id="Thu" name="Thu"></input>
              <label>Friday:</label>
              <input type="time" id="Fri" name="Fri"></input>
              <input type="time" id="Fri" name="Fri"></input>
              <label>Saturday:</label>
              <input type="time" id="Sat" name="Sat"></input>
              <input type="time" id="Sat" name="Sat"></input>
              <label>Sunday:</label>
              <input type="time" id="Sun" name="Sun"></input>
              <input type="time" id="Sun" name="Sun"></input>
            </form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
              <Button onClick={props.onHide}>Submit Time</Button>
          </Modal>
        );
}


export default TimeTable
