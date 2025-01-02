import style from "./BookingForm.module.css";
import {useEffect, useState} from 'react';

const BookingForm = (props)=>{
    useEffect(
        ()=>{
            console.log("Reservation:",reservation);
        }
    )
    const [enableReservation, setEnableReservation] = useState(false);
    const [reservation,setReservation] = useState({
        date_of_event:(new Date()).toLocaleDateString('en-US'),
        time_of_event:props.availableTimes[0],
        numberOfGuests:1,
        occasion:"Birthday"

    })

    const onFormChange = (e)=>{
        const {name,value} = e.target;
       
        setReservation((previus)=>{
            return {
                ...previus,
                [name]:value
            }
        });
        setEnableReservation(true);
    }

    const onSubmitForm = (e)=>{
        e.preventDefault();
        props.submitForm(reservation);
        setEnableReservation(false);
    }
    return(
        <section className={style.container}>
           
            <form style={{display:"grid", maxWidth:"200px", gap: "10px"}} onSubmit={onSubmitForm}>
                <h3>Reserve your table</h3>
                <label className="descriptive_text" htmlFor="res-date">Choose date</label>
                <input name="date_of_event" type="date" id="res-date" value={reservation.date_of_event} onChange={onFormChange} />
                <label className="descriptive_text" htmlFor="res-time">Choose time</label>
                <select id="res-time" name="time_of_event" value={reservation.time_of_event} onChange={onFormChange}>
                    {props.availableTimes ? props.availableTimes.map(
                        (time)=>{
                            return(
                                <option key={time}>{time}</option>
                            )
                        }
                    ) : null}
                   
                </select>
                <label className="descriptive_text" htmlFor="guests">Number of guests</label>
                <input type="number" 
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests" 
                name="numberOfGuests"
                value={reservation.numberOfGuests} 
                onChange={onFormChange}/>
                <label className="descriptive_text" htmlFor="occasion">Occasion</label>
                <select id="occasion_id" name="occasion" value={reservation.occasion} onChange={onFormChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input disabled={!enableReservation} className={`${style.submitButton} descriptive_text`} type="submit" value="Make Your reservation"></input>
            </form>
        </section>
    )
}

export default BookingForm;