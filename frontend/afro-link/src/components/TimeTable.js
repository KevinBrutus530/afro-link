import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const TimeTable = (props) => {
  let time = props.time;
  // debugger
  const handleInput = (e) => {
    // debugger
    if (time[e.currentTarget.name] === 'close') {
      time[e.currentTarget.name] = { open: '', close: '' };
      time[e.currentTarget.name][e.currentTarget.id] = e.currentTarget.value;
    } else {
      time[e.currentTarget.name][e.currentTarget.id] = e.currentTarget.value;
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Business Hours
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="timeTableForm">
          <h5 className="timeH5">Select your business hours or leave blank if closed that day.</h5>
          <label className="timeLabel">Monday:</label>
          <input
            type="time"
            id="open"
            name="Mon"
            onChange={(e) => {
              handleInput(e);
            }}
          ></input>
          <input
            type="time"
            id="close"
            name="Mon"
            onChange={(e) => {
              handleInput(e);
            }}
          ></input>
          <label className="timeLabel">Tuesday:</label>
          <input
            type="time"
            id="open"
            name="Tue"
            onChange={(e) => {
              handleInput(e);
            }}
          ></input>
          <input
            type="time"
            id="close"
            name="Tue"
            onChange={(e) => {
              handleInput(e);
            }}
          ></input>
          <label className="timeLabel">Wednesday:</label>
          <input
            type="time"
            id="open"
            name="Wed"
            onChange={(e) => {
              handleInput(e);
            }}
          ></input>
          <input
            type="time"
            id="close"
            name="Wed"
            onChange={(e) => {
              handleInput(e);
            }}
          ></input>
          <label className="timeLabel">Thursday:</label>
          <input
            type="time"
            id="open"
            name="Thu"
            onChange={(e) => {
              handleInput(e);
            }}
          ></input>
          <input
            type="time"
            id="close"
            name="Thu"
            onChange={(e) => {
              handleInput(e);
            }}
          ></input>
          <label className="timeLabel">Friday:</label>
          <input
            type="time"
            id="open"
            name="Fri"
            onChange={(e) => {
              handleInput(e);
            }}
          ></input>
          <input
            type="time"
            id="close"
            name="Fri"
            onChange={(e) => {
              handleInput(e);
            }}
          ></input>
          <label className="timeLabel">Saturday:</label>
          <input
            type="time"
            id="open"
            name="Sat"
            onChange={(e) => {
              handleInput(e);
            }}
          ></input>
          <input
            type="time"
            id="close"
            name="Sat"
            onChange={(e) => {
              handleInput(e);
            }}
          ></input>
          <label className="timeLabel">Sunday:</label>
          <input
            type="time"
            id="open"
            name="Sun"
            onChange={(e) => {
              handleInput(e);
            }}
          ></input>
          <input
            type="time"
            id="close"
            name="Sun"
            onChange={(e) => {
              handleInput(e);
            }}
          ></input>
        </form>
        <Modal.Footer></Modal.Footer>
        <Button
          className="timeTableBtn"
          onClick={() => {
            props.onHide();
            props.setTime();
          }}
        >
          Submit
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default TimeTable;
