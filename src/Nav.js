import React,{useEffect, useState} from 'react'
import "./Nav.css"
function Nav() {
 {/*const [show,handleShow]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll", () =>{
      if(window.scrollY >100){
        handleShow(true);
      }
    });
    return () =>{
      window.removeEventListener("scroll");
    };
  },[]);
*/}
  return (

    <div className='nav'>
        <img className='nav_logo' 
          src="https://imgs.search.brave.com/nPPWYuGw6pVly4dI9rurr3TU6Q7Sm6qmO5l9v6WrwQw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vd3d3LnZl/cmlmaWVkbW9tLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/NC8wNy9OZXRmbGl4/X0xvZ29fUHJpbnRf/T25lQ29sb3JQTVMu/cG5nP2ZpdD04Njg1/JTJDMjMzMyZzc2w9/MQ" alt="Netflix_logo"/>
   
   
 
  <img className='avatar'
   src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="smile"/> 
      
   </div>
  )
}

export default Nav