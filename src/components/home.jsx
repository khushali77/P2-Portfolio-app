import React from "react";
import {data} from "../profileData"; 
import Profile from "../components/profile";

function Home(){
    return(
        <div className="main-section">
            <Profile/>
            <img className="profilephoto" src={data.img} alt="Profilephoto"/>
        </div>
    );
}

export default Home;