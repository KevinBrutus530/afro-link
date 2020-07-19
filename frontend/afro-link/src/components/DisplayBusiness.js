import React from 'react';

const DisplayBusiness = ({businessInfo}) => {

    return(
        <>
                <div style={{ color: "white" }}>
        <h1>{businessInfo.biz_name}</h1>
        <h3>{businessInfo.owner_name}</h3>
        <ul style={{listStyleType:"none"}}>
        <li>{businessInfo.biz_hours}</li>
        <li>{businessInfo.street} {businessInfo.city} {businessInfo.state} {businessInfo.zip}</li>
        <li>{businessInfo.website}</li>
        </ul>
        <div className="contactInfo">
        <ul style={{listStyleType:"none"}}>
        <li>{businessInfo.phone}</li>
        <li>{businessInfo.email}</li>
        <li>{businessInfo.social_media}</li>
        </ul>
        </div>
        </div>
        </>
    )
}

export default DisplayBusiness;
