import React, { useState } from 'react';
import axios from 'axios';
import { getAPI } from '../../util/getAPI';
import Notification from '../commonlyUsed/Notification';

const Upload = ({ ownerId }) => {
  const [message, setMessage] = useState('');
  let API = getAPI();
  const [pictures, setPictures] = useState('');
  let owner_id = ownerId;

  const uploadImg = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'vrii09xu');
    data.append('cloud_name', 'afro-link');
    let res = await fetch(
      'https://api.cloudinary.com/v1_1/dnhm10tcn/image/upload',
      {
        method: 'Post',
        body: data,
      }
    );
    const file = await res.json();
    setPictures(file.secure_url);
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      if (pictures === '') {
        await axios.patch(`${API}/owners/pictures/${owner_id}`, {
          pictures:
            'https://trello-attachments.s3.amazonaws.com/5ef8bcf3775f24613fe56eb7/5ef8bfd9edb57a1eb08bbe57/9306e0b1aa785ac7b6df7e1b16eff0f1/circleLogoYellow.png',
        });
      } else {
        await axios.patch(`${API}/owners/pictures/${owner_id}`, {
          pictures: pictures,
        });
      }
      setMessage('Upload Successful!');
    } catch (err) {
      setMessage(err.message);
      console.log(err);
    }
  };

  return (
    <div className="uploadForm">
      <Notification message={message} />
      <label className="uploadLabel">
        Upload Your Image:
        <div className="uploadDiv">
          <input
            className="selectImage"
            type="file"
            onChange={(e) => uploadImg(e)}
          />
          <button onClick={handleSubmit2} className="Btn-save">
            Upload
          </button>
        </div>
      </label>
    </div>
  );
};

export default Upload;
