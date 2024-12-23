import style from "./Footer.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = ()=>{
    return(
        <footer className={style.container}>
            <div className={style.logoContainer}>
                <img src="/logo_dark_back.png" alt="logo" />
                
            </div>
            <div className={`${style.linksContainer} ${style.contentContainer}`}>
                <p className="section_category">DOORMAT NAVIGATION</p>
                <p className="highlight_text">Home</p>
                <p className="highlight_text">About</p>
                <p className="highlight_text">Table Reservation</p>
                <p className="highlight_text">Menu</p>
                <p className="highlight_text">Order Online</p>
                <p className="highlight_text">Login</p>
            </div>
            <div className={`${style.contactContainer} ${style.contentContainer} `}>
                <p className="section_category">CONTACT</p>
                <p className="highlight_text">www.littlelemon.com</p>
                <p className="highlight_text">+37 258 9666</p>
                

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