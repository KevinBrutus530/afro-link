import React, { useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useInput } from '../../util/useInput';
import { AuthContext } from '../../providers/AuthContext';
import { getAPI } from '../../util/getAPI';
import TimeTable from '../../components/TimeTable';
import AddressForm from '../Forms/Address';
import axios from 'axios';
import '../../css/EditBusiness.css';

const EditBusiness = ({ setUpdate, bizId }) => {
  const API = getAPI();
  const { currentUser, loading } = useContext(AuthContext);
  let history = useHistory();
  const biz_name = useInput('');
  const address = useInput('');
  const [modalShow, setModalShow] = useState(false);
  const [hours, setHours] = useState('Online Store');
  // const [showAddress, setAddress] = useState(false);

  //This variable is holding "time" for storage
  let time = {
    Mon: 'close',
    Tue: 'close',
    Wed: 'close',
    Thu: 'close',
    Fri: 'close',
    Sat: 'close',
    Sun: 'close',
  };

  //This fun patches new biz info to db
  const editBusinessInfo = async () => {
    try {
      await axios.patch(`${API}/businesses/${bizId}`, {
        biz_name: biz_name.value,
        hours: hours,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //Handles and sets hours input by user
  const handleHours = (e) => {
    if (e.currentTarget.selectedIndex === 0) {
      setHours(e.currentTarget.value);
    } else {
      setModalShow(true);
    }
  };

  //fun will set and show address fields
  const handleAddress = () => {
    setHouseNum(null);
    setStreet(null);
    setCity(null);
    setState(null);
    setZip(null);
    setAddress(!showAddress);
  };

  const handleSubmit = (e) => {
    //No prevent default to reset biz info from edit on refresh page
    editBusinessInfo();
  };

  return (
    <div className="editBizDiv" style={{ marginTop: '7em' }}>
      <h1 className="editH1 heavyFont">Edit Your Business Details</h1>

      <form className="editBizForm" onSubmit={handleSubmit}>
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

        <AddressForm bizId={bizId} handleAddress={handleAddress} />

        <button type="submit" className="Btn-create">
          Save
        </button>

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
