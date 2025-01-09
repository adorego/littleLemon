import style from "./CustomerSay.module.css";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
    {
        rate:4,
        photo:"/images/photo.avif",
        name:"Jhon Smith",
        review:"Nice Food"
    },
    {
        rate:3,
        photo:"/images/photo1.avif",
        name:"Maria Vega",
        review:"I love this place, nice service"
    },
    {
        rate:5,
        photo:"/images/photo2.avif",
        name:"Silvia Duarte",
        review:"Beutiful place, I´ll come back soon"
    }
]
const CustomerSay = (props)=>{
    return(
        <section className={style.container}>
            <h1 className={style.title}>Testimonials</h1>
            <div className={style.cardsContainer}>
            {testimonials.map(
                (testimonial,index)=>{
                    return <TestimonialCard key={`${testimonial.name}-${index}`} rate={testimonial.rate} photo={testimonial.photo} name={testimonial.name} review={testimonial.review} />
                }
            )}
            </div>

        </section>
    )
}

export default CustomerSay;