import style from "./Hero.module.css";
import {Link} from "react-router-dom"; 

const Hero = ()=>{
    return(
        <div className={style.container}>
            <h1 className={style.title}>Little Lemon Chicago</h1>
            <p className={style.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className={style.callToActionbutton}><Link className={style.link} to="/booking">Reserve a table</Link></button>
            <img className={style.image} src={"/restauranfood.jpg"} width={375} height={325} alt="Brushettas" />
        </div>
    )
}

export default Hero;