import React, { useState } from 'react';
import Slider from '../../Dashboard/Slider/Slider';

const style = {
    position: 'absolute',
    right: 0,
    backgroundColor: '#F4FDF8'
}

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('https://frozen-spire-66632.herokuapp.com/addADoctor', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <section className="container-fluid row">
            <Slider />
            <div className="col-md-10 p-4 pr-5" style={style}>
                <h5 className="h6-header">Add Doctor</h5>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" class="form-control" name="email" id="exampleInputEmail1" placeholder="email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName1">Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="name" id="exampleInputName1" placeholder="name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Upload a picture </label>
                        <input onChange={handleFileChange} type="file" class="form-control-file" id="exampleFormControlFile1" />
                    </div>
                        <button type="submit" class="btn">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;