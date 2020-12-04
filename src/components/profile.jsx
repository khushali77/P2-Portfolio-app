import React from "react";
import {data} from "../profileData";

function Profile(){
    return(
        <div className="profileinfo">
        <h1>{data.Name},{data.college}</h1>
        <p>{data.desc}</p>
        </div>
    );
}

export default Profile;