import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { useInput } from '../../util/useInput';
import { AuthContext } from '../../providers/AuthContext';
import { getAPI } from '../../util/getAPI';

const AddressForm = ({ bizId }) => {
  const [houseNum, setHouseNum] = useState(null);
  const [street, setStreet] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [zip, setZip] = useState(null);
  const API = getAPI();

  // const handleAddress = () => {
  //   setHouseNum(null);
  //   setStreet(null);
  //   setCity(null);
  //   setState(null);
  //   setZip(null);
  //   setAddress(!showAddress);
  // };

  //This fun patches new biz info to db
  const editAddressInfo = async () => {
    try {
      await axios.patch(`${API}/addresses/${bizId}`, {
        // street: street,
        // city: city,
        // state: state,
        // zip: zip,
        // website: website
      });
      debugger;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* <form onSubmit={editAddressInfo()}>
        <input placeholder={'Address'} />
      </form> */}
    </div>
  );
};

export default AddressForm;
