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
    <form className="uploadForm" onSubmit={handleSubmit}>
      <label className="uploadLabel">
        Upload Your Image:
        <div className="uploadDiv">
          <input
            className="selectImage"
            type="file"
            onChange={(e) => uploadImg(e)}
          />
          <button type="submit" className="Btn-save">
            Select
          </button>
        </div>
      </label>
    </form>
  );
};

export default Upload;