import React, {useState}from 'react'
import { useParams } from 'react-router-dom';
import { useInput } from '../../util/useInput';


const VerifiedOwner =({userBusinesses})=> {
    const text = useInput("");
    const [showEdit, setShowEdit] = useState(true);
    const toggleButton = () => {
        setShowEdit(!showEdit);
    };

    const { id } = useParams();
    let verifiedOwner = userBusinesses.map((el)=>{
        if(el.id==id){
        return (
          <div>
            <button className="Btn-create Reply" onClick={() => toggleButton()}>Reply</button>
            {!showEdit && (
              <form>
                <div className="labelInput">
                  <label className="labelInput">Replying:</label>
                  <textarea
                    type="text"
                    placeholder="Comments..."
                    name="comment"
                    {...text}
                    required
                  />
                </div>
                <button className="Btn-create" type="submit" id="reviewsBtn">
                  Submit
                </button>
              </form>
            )}
          </div>
        );
    }
  })

  return (
    <div>
        {verifiedOwner}
    </div>
)
}

export default VerifiedOwner
