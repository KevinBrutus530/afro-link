import React from 'react';
import { useHistory } from 'react-router-dom';

const BusinessDisplay = ({ userBusinesses }) => {
  let history = useHistory();
  const redirectToEdit = (id) => history.push(`/editbusiness/${id}`);

  const showBusiness = () => {
    if (userBusinesses) {
      let allUserBusiness = userBusinesses.map((business) => {
        // create a function that calls the reviews from each business
        // create function in spearate component using the business id as a prop
        return (
          <div>
            <div className="ownerHeader">{business.biz_name}</div>
            <div className="businessInfo">
              <ul style={{ listStyleType: 'none' }}>
                <li>
                  <img className="bizPicProfile" src={business.pictures} />
                </li>
                <li className="bizAddress">
                  {business.street} {business.city} {business.state}{' '}
                  {business.zip}
                </li>
                <li className="bizHours">{business.hours}</li>

                <li className="hyperLink">
                  <a href={business.website} target="_blank">
                    Visit Website
                  </a>
                </li>
              </ul>
              <div className="contactInfo">
                <ul>
                  <label id="contactsLabel">Contact Info: </label>
                  <li>{business.phone}</li>
                  <li>{business.email}</li>

                  <li className="hyperLink">
                    <a href={business.social_media} target="_blank"></a>
                  </li>
                </ul>
                <button onClick={() => redirectToEdit(business.id)}>
                  Edit Business
                </button>
              </div>
            </div>
          </div>
        );
      });
      return <div>{allUserBusiness}</div>;
    } else {
      return (
        <div>
          <button>Add New Business</button>
        </div>
      );
    }
  };
  return <div>{showBusiness()}</div>;
};

export default BusinessDisplay;
