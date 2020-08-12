import React, {useState} from "react";
import axios from "axios";



const Upload = () => {
    
    const [pictures, setPictures] = useState("")


    const uploadImg = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0])
        data.append('upload_preset', 'afro-link');
        data.append('cloud_name', 'cta')
        let res = await fetch("https://api.cloudinary.com/v1_1/dbhncpu02/image/upload", {
            method: 'Post',
            body: data
            }
        )
        const file = await res.json()
        setPictures(file.secure_url)
    }

    






    return(
        <div>
            <div className="uploadContainer">
             <form className="upload" onSubmit={handleSubmit}>
                <div className="input">
                <input type="file" onChange={uploadImg}/>
                <input type="submit" className="submit"/>
                </div>
            </form>
        </div>
        </div>
        
    )
}
export default Upload;