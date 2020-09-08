import React, { useState, useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthContext';
import { getAPI } from '../../util/getAPI';
import TimeTable from '../../components/TimeTable';
import axios from 'axios';
import '../../css/EditBusiness.css';
import Upload from './Upload';

const EditBusiness = () => {
  const { id } = useParams();
  const API = getAPI();
  const { currentUser } = useContext(AuthContext);
  let history = useHistory();
  const [bizName, setBizName] = useState('');
  const [modalShow, setModalShow] = useState(false);

  const [ownerName, setOwnerName] = useState('');

  const [hours, setHours] = useState('Online Store');
  const [ownerId, setOwnerId] = useState('');

  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [website, setWebsite] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [socialMedia, setSocialMedia] = useState('');

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

  useEffect(() => {
    fetchBizById();
  }, []);

  const fetchBizById = async () => {
    try {
      let bizRes = await axios.get(`${API}/businesses/${id}`);
      let biz = bizRes.data.payload;
      setOwnerId(biz.id);
      setOwnerName(biz.owner_name);
      setBizName(biz.biz_name);
      setStreet(biz.street);
      setCity(biz.city);
      setState(biz.state);
      setZip(biz.zip);
      setWebsite(biz.website);
      setPhone(biz.phone);
      setEmail(biz.email);
      setSocialMedia(biz.social_media);
    } catch (err) {
      console.log(err);
    }
  };

  //This fun patches new biz info to db
  const editBusinessInfo = async () => {
    try {
      // Update business name and hours
      await axios.patch(`${API}/businesses/${id}`, {
        biz_name: bizName,
        hours: hours,
      });

      // Update business address and website
      await axios.patch(`${API}/addresses/${id}`, {
        street: street,
        city: city,
        state: state,
        zip: zip,
        website: website,
      });

      // Update business contact
      await axios.patch(`${API}/contacts/${id}`, {
        phone: phone,
        email: email,
        social_media: socialMedia,
      });

      // Update business owner name
      await axios.patch(`${API}/owners/user/${id}`, {
        owner_name: ownerName,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editBusinessInfo();
    history.push(`/profile/${currentUser.uid}`);
  };

  return (
    <div>
      <h1 className="editH1 heavyFont">Edit Your Business Details</h1>
      <div className="editBizDiv">
        <form className="editBizForm" onSubmit={handleSubmit}>
          <label>Business Name: </label>
          <input
            type="text"
            placeholder="Business Name"
            value={bizName}
            onChange={(e) => setBizName(e.currentTarget.value)}
          />

          <label>Owner Name: </label>
          <input
            type="text"
            placeholder="Owner Name"
            value={ownerName}
            onChange={(e) => setOwnerName(e.currentTarget.value)}
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
      
          <input
            placeholder={'Street'}
            value={street}
            onChange={(e) => setStreet(e.currentTarget.value)}
          />
          <input
            placeholder={'City'}
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
          />
          <input
            placeholder={'State'}
            value={state}
            onChange={(e) => setState(e.currentTarget.value)}
          />
          <input
            placeholder={'Zip'}
            value={zip}
            onChange={(e) => setZip(e.currentTarget.value)}
          />
          <input
            placeholder={'Website'}
            value={website}
            onChange={(e) => setWebsite(e.currentTarget.value)}
          />

          <input
            placeholder={'Phone'}
            value={phone}
            onChange={(e) => setPhone(e.currentTarget.value)}
          />
          <input
            placeholder={'Email'}
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <input
            placeholder={'Social Media'}
            value={socialMedia}
            onChange={(e) => setSocialMedia(e.currentTarget.value)}
          />
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
        <Upload ownerId={ownerId} />
      </div>
    </div>
  );
};

export default EditBusiness;
