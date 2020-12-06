import React from "react";

function MakeForm(){
    return(
        <div className="makeform">
        <form>
            <h4>Let's connect</h4>
            Name: <input type="text" className="name" placeholder="eg. John Smith"/><br/>
            E-mail: <input type="email" className="email" placeholder="eg. johnsmith@xyz.com"/><br/>
            <button type="Submit">Submit</button>
        </form>
        </div>
    );
}

export default MakeForm;