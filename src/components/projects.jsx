import React from "react";
import {ProjectList} from "../profileData"

export const Project = (props) =>{
    return( 
     <div className="projectlinks" key={props.data.id}>
        <h4>Project: <a href={props.data.link} rel="noreferrer" target="_blank">{props.data.name}</a></h4>
        <h5>{props.data.desc}</h5>
        <h5>Languages: {props.data.lang}</h5>
     </div>
     );
 }
 
 function Projects(){
     return(
         <div className="projects">
             <h2>Projects</h2>
             {ProjectList.map(item=>(<li key={item.id}><Project data={item}/></li>))}
         </div>
     );
 }
 
export default Projects;