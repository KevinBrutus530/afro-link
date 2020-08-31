import React from 'react';
import { useHistory } from 'react-router-dom';

const BusinessDisplay = ({ userBusinesses }) => {
  let history = useHistory();
  const redirectToEdit = (id) => history.push(`/editbusiness/${id}`);

  const showBusiness = () => {
    if (userBusinesses.length) {
      let allUserBusiness = userBusinesses.map((business) => {
        // debugger;
        // create a function that calls the reviews from each business
        // create function in spearate component using the business id as a prop

        //fn to show each address components "blank" if null in db//
        const displayAddress = () => {
          return (
            <div className="bizHours">
              {
                (business.street ? (
                  business.street
                ) : (
                  <p className="displayNone"></p>
                ),
                business.city ? business.city : <p className="displayNone"></p>,
                business.state ? (
                  business.state
                ) : (
                  <p className="displayNone"></p>
                ),
                business.zip ? business.zip : <p className="displayNone"></p>)
              }
            </div>
          );
        };

        return (
          <div>
            <div id="bizName" className="ownerHeader heavyFont">
              {business.biz_name}
            </div>
            <div className="businessInfo bizProfileInfo">
              <ul style={{ listStyleType: 'none' }}>
                <li>
                  <img className="bizPicProfile" src={business.pictures} />
                </li>
                <li className="bizAddress">{displayAddress()}</li>
                <li className="bizHours">{business.hours}</li>

                <li className="hyperLink">
                  {business.website ? (
                    <a href={business.website} target="_blank">
                      Visit Website
                    </a>
                  ) : (
                    <p className="noneProvided">None Provided</p>
                  )}
                </li>
              </ul>
              <div className="contactInfo">
                <ul>
                  <label id="contactsLabel">Contact Info: </label>
                  <li>
                    {!business.phone || business.phone === 'n/a' ? (
                      <p className="noneProvided">None Provided</p>
                    ) : (
                      business.phone
                    )}
                  </li>
                  <li>
                    {business.email ? (
                      business.email
                    ) : (
                      <p className="noneProvided">None Provided</p>
                    )}
                  </li>

                  <li className="hyperLink">
                    {business.social_media ? (
                      <a href={business.social_media} target="_blank"></a>
                    ) : (
                      <p className="noneProvided">None Provided</p>
                    )}
                  </li>
                </ul>
                <button
                  className="Btn-rest"
                  onClick={() => redirectToEdit(business.id)}
                >
                  Edit Business
                </button>
              </div>
            </div>
          </div>
        );
      });
      console.log(userBusinesses);
      return <div>{allUserBusiness}</div>;
    } else {
      console.log(userBusinesses);
      return (
        <div>
          <button
            onClick={() => {
              history.push('/newBusiness');
            }}
          >
            Add New Business
          </button>
        </div>
      );
    }
  };
  return <div>{showBusiness()}</div>;
};

export default BusinessDisplay;
