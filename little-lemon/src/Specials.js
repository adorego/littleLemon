
import Card from "./Card";
import style from "./Specials.module.css";
import {Link} from "react-router-dom";

const specials = [
    {
        imgSrc:"/images/greek_salad.png",
        alt:"Greek Salad",
        title:"Greek Salad", 
        price:"2.93",
        content:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        delivery:true
    },
    {
        imgSrc:"/images/greek_salad.png",
        alt:"Greek Salad",
        title:"Greek Salad", 
        price:"2.93",
        content:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        delivery:true
    },
    {
        imgSrc:"/images/greek_salad.png",
        alt:"Greek Salad",
        title:"Greek Salad", 
        price:"2.93",
        content:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        delivery:true
    },
    
]
const Specials = ()=>{
    return(
        <section className={style.container}>
            <div className={style.headerContainer}>
                <div className={style.mainTitleContainer}>
                    <h1 className={style.mainTitle}>Specials</h1>
                </div>
                
                <div className={style.callToActionButtonContainer}>
                    <button className={style.callToActionButton}><Link className={style.link} to="/booking">Reserve a table</Link></button>
                </div>
            </div>
            
            <div className={style.cardsContainer}>
                    <div className={style.dishContainer}>
                        {specials.map(
                            (dish,index)=>{
                                return <Card 
                                    key={`${dish}-${index}`}
                                    imgSrc={dish.imgSrc} 
                                    alt={dish.alt} 
                                    title={dish.title} 
                                    price={dish.price} 
                                    content={dish.content} 
                                    delivery={dish.delivery} />
                            }
                        )}
                    </div>
            </div> 
        </section>
    )
}

export default Specials;