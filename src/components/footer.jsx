import React from "react";
import {data} from "../profileData";

function Footer(){
    return(
        <div class="footer">
            <img className="location" src="https://img.icons8.com/dusk/64/000000/user-location.png" alt="location"/>
            <p class="city">{data.location}</p>
            <img className="contact" src="https://img.icons8.com/dusk/64/000000/business-contact.png" alt="contact"/>
            <p className="number">{data.number}</p>
            <img className="mail" src="https://img.icons8.com/doodle/48/000000/apple-mail.png" alt="mail"/>
            <p className="mailid">{data.mailid}</p>
        </div>
    );
}

export default Footer;