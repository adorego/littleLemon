import style from "./TestimonialCard.module.css";
import Rating from "./Rating";

const TestimonialCard= (props)=>{
    return(
        <article className={style.container}>
            <Rating rate={props.rate}/>
            <div className={style.photoNameContainer}>
                <img className={style.photo} src={props.photo} alt="My photo" />
                <p className={style.name}>{props.name}</p>
            </div>
            
            <p className={style.review}>{props.review}</p>

        </article>

    )
}


export default TestimonialCard;