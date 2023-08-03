import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
    const [handle,setHandle]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                setHandle(true);
            }
            else{
                setHandle(false);
            }
        })

        return ()=>{
            window.removeEventListener("scroll");
        }
    },[])

  return (
    <div className={`nav ${handle && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar" 
        src="https://cdn-icons-png.flaticon.com/512/61/61205.png"
        // src="123.png"
        alt="Avatar logo"
      />
    </div>
  );
}

export default Nav;


