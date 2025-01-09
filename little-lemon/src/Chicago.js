import style from "./Chicago.module.css";

const Chicago = (props)=>{
    return(
        <section className={style.container}>
            <div className={style.textContainer}>
                <div className={style.title}>
                    <h1>Little Lemon Chicago</h1>
                </div>
                <div className={style.history}>
                    <p>Founded in 1892 by Irish immigrant John Daley, this family-owned restaurant is Chicago's oldest: 
                        Daley opened the restaurant in an empty storefront on East 63rd Street 
                        The restaurant was originally established for World's Fair workers 
                        In 1918, Daley sold the restaurant to Greek immigrants Paul Emmanuel and Tom Kyros 
                    </p>
                </div>
            </div>
            <div className={style.photoContainer}>
                <img className={style.photo1} src="/images/photo_restaurant1.avif" alt="Main Entrance" />
                <img className={style.photo2} src="/images/photo_restaurant2.avif" alt="Main Entrance" />

            </div>
        </section>
    )
}

export default Chicago;