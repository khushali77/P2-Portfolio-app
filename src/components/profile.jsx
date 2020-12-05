import React from "react";
import {data} from "../profileData";

function Profile(){
    return(
        <div className="profileinfo">
        <h1>{data.Name}</h1>
        <p>{data.desc}</p>
        <div className="connect">
            <a href="https://www.instagram.com/khushaliiishahh/" target="_blank" rel="noreferrer"><img src={data.connect[0]} alt="connect"/></a>
            <a href="https://www.linkedin.com/in/khushalishah7/" target="_blank" rel="noreferrer"><img src={data.connect[1]} alt="connect"/></a>
            <a href="https://twitter.com/khushaliiishahh" target="_blank" rel="noreferrer"><img src={data.connect[2]} alt="connect"/></a>
            <a href="https://github.com/khushali77" target="_blank" rel="noreferrer"><img src={data.connect[3]} alt="connect"/></a>
        </div>
        </div>
    );
}

export default Profile;