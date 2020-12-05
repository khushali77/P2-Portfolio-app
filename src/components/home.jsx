import React from "react";
import {data} from "../profileData"; 
import Profile from "../components/profile";
import Information from "../components/information";
import MakeForm from "../components/makeform";

function Home(){
    return(
        <>
        <div className="main-section">
            <Profile/>
            <img className="profilephoto" src={data.img} alt="Profilephoto"/>
        </div>
        <Information/>
        <MakeForm/>
        </>
    );
}

export default Home;