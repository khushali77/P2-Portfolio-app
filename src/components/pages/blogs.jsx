import React from "react";
import {BlogsList} from "profileData"

export const Blog = (props) =>{
    return( 
     <div className="blogslinks" key={props.data.id}>
        <h4>Blog: <a href={props.data.link} rel="noreferrer" target="_blank">{props.data.name}</a></h4>
     </div>
     );
 }
 
 function Blogs(){
     return(
         <div className="blogs">
             <h2>Blogs</h2>
             {BlogsList.map(item=>(<li key={item.id}><Blog data={item}/></li>))}
         </div>
     );
 }
 
export default Blogs;