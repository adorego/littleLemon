import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import style from "./Rating.module.css";

const Rating = (props)=>{
    const stars = new Array(5);
    for(let i=1;i<=stars.length;i++){
        i<=props.rate ? stars[i-1] = 1 : stars[i-1] = 0;
    }
    return(
        <div className={style.container}>
            {stars.map(
                (num)=>{
                    return (num === 1 ? 
                    <div> <StarIcon style={{color:"grey"}} /> </div> :
                    <div> <StarBorderIcon /> </div>)
                }
            )}
            
        </div>
    )
}

export default Rating;