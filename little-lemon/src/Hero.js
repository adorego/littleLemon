import style from "./Hero.module.css";
import {Link} from "react-router-dom"; 

const Hero = ()=>{
    return(
        <div className={style.container}>
            <div className={`${style.item} ${style.itemTitle}`} >
                <h1 className={style.title}>Little Lemon </h1>
            </div>
            <div className={`${style.item} ${style.itemTitle2}`} >
            <h1 className={style.title}>Chicago </h1>
            </div>
            <div className={`${style.item} ${style.itemParragraph}`}>
                <p className={style.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
           
            
           <div className={`${style.item} ${style.itemImage}`}>
                <img className={style.image} src={"/restaurant_food_mobile.png"}  alt="Brushettas" />
                <img className={style.imageDesktop} src={"/restaurant_food_desktop.png"}  alt="Brushettas" />
           </div> 
           <div className={`${style.item} ${style.itemButton}`}>
                <button className={style.callToActionbutton}><Link className={style.link} to="/booking">Reserve a table</Link></button>
            </div>
           
        </div>
    )
}

export default Hero;