import React from "react";
import {data} from "../profileData"; 
import Profile from "../components/profile";
import Information from "../components/information";

function Home(){
    return(
        <>
        <div className="main-section">
            <Profile/>
            <img className="profilephoto" src={data.img} alt="Profilephoto"/>
        </div>
        <Information/>
        </>
    );
}

export default Home;