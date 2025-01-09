import {useReducer} from "react";
import BookingForm from "./BookingForm";
import { fetchAPI,submitAPI } from "./api/api";
import { useNavigate } from "react-router-dom";


export const initializeTimes = (date)=>{
    const result  = fetchAPI(date);
    return result
    
}
export const updateTimes = (availableTimes,action)=>{
    if(action.type === "reserve"){
        const result =  availableTimes.filter((time)=>time !== action.reservation.time_of_event)
        return result;
    }
    return(availableTimes);
}
const Main = (props)=>{
    const [availableTimes,dispatch] = useReducer(updateTimes,initializeTimes(new Date()));
    const navigate = useNavigate();

    const submitForm = (formData)=>{
        console.log("FormData:",formData);
        const result = submitAPI(formData);
        if(result){
            navigate("/booking/confirmed")
        }
    }
    return(
        <main>
           <BookingForm availableTimes={availableTimes} setAvailableTimes={dispatch} submitForm={submitForm} />

        </main>
    )
}

export default Main;