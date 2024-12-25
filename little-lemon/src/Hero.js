import style from "./Hero.module.css";

const Hero = ()=>{
    return(
        <div className={style.container}>
            <h1 className={style.title}>Little Lemon Chicago</h1>
            <p className={style.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className={style.callToActionbutton}>Reserve a Table </button>
            <img className={style.image} src={"/restauranfood.jpg"} width={375} height={325} alt="Brushettas photo" />
        </div>
    )
}

export default Hero;