import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../asset/Style/NavigationBar/NavigationBar.css";
import Menu from "../asset/Images/navigation.png";
const NavBar = () => {
    const [OC,setOC]=useState("translate(-100%)")
    const SideBarHandler =()=>{
        if(OC==="translate(-100%)"){
            setOC("translate(0%)");
        }
        else if(OC==="translate(0%)"){
            setOC("translate(-100%)");
        }
    }
    const closeNav = ()=>{
        setOC("translate(-100%)")
    }
    return (
        <React.Fragment>
            <nav>
                <div className="logo">
                    <h1>RehanAli</h1>
                </div>
                <div className="Menu" onClick={SideBarHandler}>
                    <img src={Menu} alt="menu" />
                </div>
            </nav>
            <div className="sidebar" style={{transform:OC,transition:"0.2s"}}>
                <div className="sidebarBtn">
                    <NavLink exact activeClassName="active" onClick={closeNav} to={"/"}><h1>home 🏠</h1></NavLink>
                </div>
                <div className="sidebarBtn">
                  <NavLink exact activeClassName="active" onClick={closeNav} to={"/skills"}><h1>skills 🛠️</h1></NavLink>
                </div>
                <div className="sidebarBtn">
                    <NavLink exact activeClassName="active" onClick={closeNav} to={"/projects"}><h1>project 📑</h1></NavLink>
                </div>
                <div className="sidebarBtn">
                    <NavLink exact activeClassName="active" onClick={closeNav} to={"/contact"}><h1>contact 📱</h1></NavLink>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NavBar;