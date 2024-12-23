import React from "react";
import style from "./Nav.module.css";


const navItems = ["Home", "About", "Menu", "Reservation", "Order Online", "Login"]
const Nav = ()=>{
    return(
        <nav className={style.container}>
            <img className={style.logo} src={"/logo.png"} width={148} height={40} alt="logo" />
            <ul className={style.navContainer}>
                {navItems.map(
                    (item)=>{
                        return(
                            <li key={item} className={`${style.navItem} highlight_text`}>{item}</li>
                        )
                    }
                )}
                
            </ul>
        </nav>
    )
}

export default Nav;