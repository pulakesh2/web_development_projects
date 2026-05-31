import React, { useState } from 'react';

export default function Addcontent(props) {
    let styles = {
        width:"50%",
        paddingLeft: "10%"
    };
    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [location, setlocation] = useState("");
    const adddetails = (e)=>{
        e.preventDefault();
        if(!name||!age||!location){
            alert("please fill up your details");
        }
        props.adddata(name,age,location);
    }
    return (
        <div style={styles}>
            <h2>add your details</h2>
            <form onSubmit={adddetails}>
                <div className="mb-3">
                    <label htmlfor="name" class="form-label">your name</label>
                    <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} class="form-control" id="name" aria-describedby="emailHelp" />
                   
                </div>
                <div className="mb-3">
                    <label htmlfor="age" class="form-label">your age</label>
                    <input type="text" value={age} onChange={(e)=>{setage(e.target.value)}} class="form-control" id="age" />
                </div>
                <div className="mb-3">
                    <label htmlfor="location" class="form-label">your location</label>
                    <input type="text" value={location} onChange={(e)=>{setlocation(e.target.value)}} class="form-control" id="location" />
                </div>

                <button type="submit" class="btn btn-success">Submit</button>
            </form>
        </div>
    )
}
