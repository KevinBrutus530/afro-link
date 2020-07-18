import React from 'react';

const Business = ({resultDisplay}) => {
    // debugger
    // let businessId = resultDisplay.biz_id
    let noAddress = ""
    let noHours = "Not Available"
    let bizz = resultDisplay.street ===  null ? resultDisplay.street = noAddress : resultDisplay.street
    let hrsSub = resultDisplay.hours ===  "" ? resultDisplay.hours = noHours : resultDisplay.hours


    const handleBusiness = (e) =>{
        debugger
    }
    return (
        <div key={resultDisplay.biz_id} value={resultDisplay.biz_id} onClick={()=>handleBusiness(resultDisplay.biz_id)}>
            <h3>
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