import style from "./Footer.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";

const Footer = ()=>{
    return(
        <footer className={style.container}>
            <div className={style.logoContainer}>
                <img className={style.logo} src="/logo_dark_back.png" alt="logo" />
                
            </div>
            <div className={`${style.linksContainer} ${style.contentContainer}`}>
                <p className="section_category">DOORMAT NAVIGATION</p>
                <p className="highlight_text"><Link className={style.link} to="/">Home</Link></p>
                <p className="highlight_text"><Link className={style.link} to="/">About</Link></p>
                <p className="highlight_text"><Link className={style.link} to="/">Table Reservation</Link></p>
                <p className="highlight_text"><Link className={style.link} to="/">Menu</Link></p>
                <p className="highlight_text"><Link className={style.link} to="/">Order Online</Link></p>
                <p className="highlight_text"><Link className={style.link} to="/">Login</Link></p>
            </div>
            <div className={`${style.contactContainer} ${style.contentContainer} `}>
                <p className="section_category">CONTACT</p>
                <p className="highlight_text"><Link className={style.link} to="/">www.littlelemon.com</Link></p>
                <p className="highlight_text"><Link className={style.link} to="/">+37 258 9666</Link></p>
                

            </div>
            <div className={`${style.socialsContainer} ${style.contentContainer}`}>
                <p className="section_category">SOCIALS</p>
                <div className="iconsContainer">
                    <FacebookIcon />
                    <InstagramIcon />
                </div>
                
                
            </div>

        </footer>
    )
}

export default Footer;