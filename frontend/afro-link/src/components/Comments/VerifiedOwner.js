import React from 'react'
import { useParams, useHistory } from 'react-router-dom';


const VerifiedOwner =({userBusinesses})=> {
    const { id } = useParams();
    let verifiedOwner = userBusinesses.forEach((el)=>{
    if(el.id==id){
      return (
          <div>
          <button>Reply this review</button>
          </div>
      )
    }else{
      return null
    }
  })
return <div>{verifiedOwner()}</div>

}

export default VerifiedOwner
