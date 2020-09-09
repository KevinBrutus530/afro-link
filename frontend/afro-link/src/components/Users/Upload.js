import React, { useState } from 'react';
import axios from 'axios';
import { getAPI } from '../../util/getAPI';

const Upload = ({ ownerId }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${API}/owners/pictures/${owner_id}`, {
        pictures: pictures,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="uploadContainer">
      <form className="upload" onSubmit={handleSubmit}>
        <label>
          Upload Your Picture:
          <div className="input">
            <input type="file" onChange={(e) => uploadImg(e)} />
            <button className="submit">Save</button>
          </div>
        </label>
      </form>
    </div>
  );
};

export default Upload;
