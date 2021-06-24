import React from "react";
import axios from "axios";

let photo;

function Cloudinary() {
    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dhx8koumu/upload/';
    const CLOUDINARY_IMAGE = "https://res.cloudinary.com/dhx8koumu/image/upload/";
    const CLOUDINARY_UPLOAD_PRESET = 'pyejztvw';

    var imgPreview = document.getElementById('img-preview');
    var fileUpload = document.getElementById('file-upload');

    imgPreview.addEventListener('click', () => {
        fileUpload.click();
    });

    fileUpload.addEventListener('change', function(event) {
        // console.log(event);
        var file = event.target.files[0];
        // console.log(file);
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
            // console.log(res);
            // const format = res.data.format;
            const publicId = res.data.public_id;
            const version = res.data.version;
            // getTransformedImage(format, publicId, version);
            const newUrl = CLOUDINARY_IMAGE + "c_fill,w_125,h_125,g_auto,r_max/v" + version + "/" + publicId + ".png";
            photo = newUrl;
            imgPreview.src = newUrl;
            console.log(imgPreview);
        }).catch(function(err) {
            console.log(err);
        })
    });
 
    return (
        <div className="card-cloud">
            <img src="https://via.placeholder.com/125.png?text=+" id="img-preview" alt=""/>
            <label className="file-upload-container" for="file-upload">
                <input id="file-upload" type="file" style={{display: 'none'}} />
                Upload
            </label>
        </div>
    )
}

export default Cloudinary;