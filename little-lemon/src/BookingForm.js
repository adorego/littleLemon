import style from "./BookingForm.module.css";
import {Formik, Form, Field, ErrorMessage} from 'formik';

const BookingForm = (props)=>{
    
    return(
        <section className={style.container}>
           <Formik
            initialValues={{date_of_event:"",time_of_event:"",numberOfGuests:1,occasion:""}}
            validate={values =>{
                const errors = {};
                const today_date = new Date();
                const today = parseDateString(today_date.getFullYear(),today_date.getMonth(),today_date.getDate());
                const event_date = Date.parse(`${values.date_of_event}T00:00:00`);
                
                
                if(!values.date_of_event){
                    errors.date_of_event = "Reservation date is needed"
                }else if(event_date < today){
                    errors.date_of_event = "Reservation date cannot be before today"
                }
                if(!values.time_of_event){
                    errors.time_of_event = "Reservation time cannot be empty"
                }
                if(values.numberOfGuests < 1){
                    errors.numberOfGuests = "Number of Guest should be at least 1"
                }
                if(!values.occasion){
                    errors.occasion = "Please select an occation from the list"
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                
                props.submitForm(values);
                setSubmitting(false);
              }}
           >

            {({
                isSubmitting,
                isValid,
                dirty,
                values
            
            }) =>(
               
                <Form className={style.container}>
                     
                    <h3>Reserve your table!</h3>
                    <div className={style.fieldContainer}>
                        <label htmlFor="date_of_event_id" className={style.label}>Event Date:</label>
                        <Field className={style.input} id="date_of_event_id" type="date" name="date_of_event" required  />
                        <ErrorMessage name="date_of_event" component="div" style={{ color: "red" }} />
                    </div>
                    <div className={style.fieldContainer}>
                       <label htmlFor="time_of_event_id" className={style.label}>Event Time:</label>
                        <Field type="time" id="time_of_event_id" as="select" name="time_of_event" required>
                            <option value="" label="Select a time" />
                            {
                                props.availableTimes ? props.availableTimes.map(
                                    (time)=>{
                                        return(
                                            <option key={time} value={time} label={time} />
                                        )
                                    }
                                ) : null
                            }
                        </Field>
                        <ErrorMessage name="time_of_event" component="div" style={{ color: "red" }}/>
                    </div>
                    <div className={style.fieldContainer}>
                        <label htmlFor="numberOfGuests_id" className={style.label}>Number of guests:</label>
                        <Field id="numberOfGuests_id" type="number" name="numberOfGuests" min="1" max="11" />
                        <ErrorMessage name="numberOfGuests" component="div" style={{ color: "red" }}/>
                    </div>
                    <div className={style.fieldContainer}>
                        <label htmlFor="occasion_id" className={style.label}>Occasion:</label>
                        <Field as="select" id="occasion_id" type="text" name="occasion">
                            <option value="no ocassion" label="No occasion" />
                            <option value="Birthday" label="Birthday" />
                            <option value="Office Meeting" label="Office Meeting" />
                            <option value="Family Meeting" label="Family Meeting" />
                        </Field>
                        <ErrorMessage name="occasion" component="div" style={{ color: "red" }}/>
                    </div>
                    <div className={style.fieldButtonContainer}>
                        <button aria-label="On Click" className={style.submitButton} type="submit" disabled={!(isValid && dirty)}>
                            reserve
                        </button>
                    </div>
                   


                </Form>
            )}

           </Formik>
            
        </section>
    )
}

const parseDateString = (year,month,day) =>{
    
    return Date.parse(new Date(year,month,day,0,0,0));
}

export default BookingForm;