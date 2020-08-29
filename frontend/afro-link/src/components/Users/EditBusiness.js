import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useInput } from '../../util/useInput';
import axios from 'axios';
import { getAPI } from '../../util/getAPI';
import TimeTable from '../../components/TimeTable';
import AddressForm from '../Forms/Address';

const EditBusiness = () => {
  const API = getAPI();
  const { id } = useParams();
  let history = useHistory();
  const biz_name = useInput('');
  const address = useInput('');
  const [modalShow, setModalShow] = useState(false);
  const [hours, setHours] = useState('Online Store');
  // const [showAddress, setAddress] = useState(false);

  let time = {
    Mon: 'close',
    Tue: 'close',
    Wed: 'close',
    Thu: 'close',
    Fri: 'close',
    Sat: 'close',
    Sun: 'close',
  };

  const editBusinessInfo = async () => {
    try {
      await axios.patch(`${API}/businesses/${id}`, {
        biz_name: biz_name.value,
        hours: hours,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleHours = (e) => {
    if (e.currentTarget.selectedIndex === 0) {
      setHours(e.currentTarget.value);
    } else {
      setModalShow(true);
    }
  };

  // const handleAddress = () => {
  //   setHouseNum(null);
  //   setStreet(null);
  //   setCity(null);
  //   setState(null);
  //   setZip(null);
  //   setAddress(!showAddress);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    editBusinessInfo();
    history.push(`/profile/:userId`);
  };

  return (
    <div style={{ marginTop: '7em' }}>
      <form onSubmit={handleSubmit}>
        <label>Business Name: </label>
        <input
          type="text"
          placeholder="Business Name"
          value={biz_name.value}
          required
          {...biz_name}
        />

        <label>Hours of Service: </label>
        <select
          className="selectBizBar"
          onChange={(e) => handleHours(e)}
          required
        >
          <option defaultValue="1">Online Store</option>
          <option defaultValue="2">Add business Hours</option>
        </select>
        <AddressForm />
        <button type="submit">Save</button>
        <div>
          <TimeTable
            show={modalShow}
            onHide={() => setModalShow(false)}
            setTime={() => {
              setHours(time);
            }}
            time={time}
          />
        </div>
      </form>
    </div>
  );
};

export default EditBusiness;
