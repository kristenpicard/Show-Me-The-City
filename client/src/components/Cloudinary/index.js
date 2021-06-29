import React, { useState } from "react";
import axios from "axios";

function Cloudinary() {
    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dhx8koumu/upload/';
    const CLOUDINARY_IMAGE = "https://res.cloudinary.com/dhx8koumu/image/upload/";
    const CLOUDINARY_UPLOAD_PRESET = 'pyejztvw';

    const [photo, setPhoto] = useState("https://via.placeholder.com/300x175")

    function handleChangeEvent(event) {
        var file = event.target.files[0];
        var formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

        axios({
            url: CLOUDINARY_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formData,
        }).then(function(res) {
            const publicId = res.data.public_id;
            const version = res.data.version;
            const newUrl = CLOUDINARY_IMAGE + "c_fill,w_300,h_175,g_auto/v" + version + "/" + publicId + ".png";
            setPhoto(newUrl);
            return photo;
        }).catch(function(err) {
            console.log(err);
        })
    };
 
    return (
        <div className="card-cloud">
            <img src={photo} id="img-preview" alt=""/>
            <label className="file-upload-container" for="file-upload">
                <input id="file-upload" type="file" style={{display: 'none'}} onChange={handleChangeEvent}/>
                Upload
            </label>
        </div>
    )
}

export default Cloudinary;