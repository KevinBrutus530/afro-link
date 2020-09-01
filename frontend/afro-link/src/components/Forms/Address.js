import React from 'react';

const AddressForm = ({ bizId, handleAddress }) => {




  //This fun patches new biz info to db
  const editBusinessInfo = async () => {
    try {
      await axios.patch(`${API}/addresses/${bizId}`, {
       
        street: street,
        city: city,
        state: state,
        zip: zip,
        website: website
      });
      debugger;
    } catch (err) {
      console.log(err);
    }
  };

  return <div>address form here</div>;
};

export default AddressForm;
