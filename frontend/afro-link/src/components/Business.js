import React from 'react';

const Business = ({resultDisplay}) => {
    // let businessId = resultDisplay.id
    let noAddress = ""
    let noHours = "Not Available"
    let bizz = resultDisplay.street ===  null ? resultDisplay.street = noAddress : resultDisplay.street
    let hrsSub = resultDisplay.hours ===  "" ? resultDisplay.hours = noHours : resultDisplay.hours


    const handleBusiness = (e) =>{
        // debugger
    }
    return (
        <div key={resultDisplay.id}  onClick={handleBusiness}>
            <h3 value={resultDisplay.id}>
                {resultDisplay.biz_name}
            </h3>
            <li>
                Hours: {hrsSub}
            </li>      
            <li>
                {bizz} {resultDisplay.city} {resultDisplay.state} {resultDisplay.zip}
            </li>
            <li>
                <a href={resultDisplay.website}>{resultDisplay.website}</a>
            </li>
            <br/>
      </div>
    )
}

export default Business