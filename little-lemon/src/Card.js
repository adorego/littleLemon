
import style from "./Card.module.css";
import MopedIcon from '@mui/icons-material/Moped';

const Card = ({imgSrc, alt ,title, price, content, delivery })=>{
    return(
        <div className={style.container}>
            <img src={imgSrc} alt={alt} width={265} height={185} />
            <div className={style.titleSection}>
                <p className={`card_title ${style.title} `}>{title}</p>
                <p className={`highlight_text ${style.price} `}>{price}</p>
            </div>
            <p>{content}</p>
            {delivery ? <p className={`highlight_text ${style.delivery}`}>Order a delivery <MopedIcon /></p> : null}

        </div>
    )
}

export default Card;