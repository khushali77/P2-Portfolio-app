import React from "react";
import {data} from "../profileData";

function Information(){
    return(
        <div className="information">
            <div className="infodesc">
                <p>{data.info}</p>
            </div>
        </div>
    );
}

export default Information;