import React,{useState} from "react";
import style from "./Nav.module.css";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";


const navItems = [{label:"Home",url:"/"},{label:"About",url:"#about"}, {label:"Menu",url:"/booking"},{label:"Reservation",url:"/booking"}, {label:"Order Online",url:"/booking"}, {label:"Login",url:"/booking"}]
const Nav = ()=>{
    const [showNavBar,setShowNavBar] = useState(false);
    const navigate = useNavigate();

    const toogleSidBar = (e)=>{
        setShowNavBar((previus)=>{
            setShowNavBar(!previus);
        })
    }
    return(
        <nav className={style.container}>
            <img className={style.logo} src={"/logo.png"} onClick={(e)=>navigate("/")} width={148} height={40} alt="logo" />
            <ul className={style.navContainer}>
                {navItems.map(
                    (item,index)=>{
                        return(
                            <li key={`${item}-${index}`} className={`${style.navItem} highlight_text`}><Link to={item.url}>{item.label}</Link></li>
                        )
                    }
                )}
                
            </ul>
            <button className={style.menuIcon} onClick={toogleSidBar}><MenuIcon /></button>
            {showNavBar && <div className={style.sideBar}>
                <ul className={style.navContainerMobile}>
                    {navItems.map(
                        (item,index)=>{
                            return(
                                <li key={`${item}-${index}`}  className={`${style.navItem} highlight_text`}><Link to={item.url}>{item.label}</Link></li>
                            )
                        }
                    )}
                </ul>
            </div>}
        </nav>
    )
}

export default Nav;