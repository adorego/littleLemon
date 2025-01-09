import BookingForm from "./BookingForm";
import {initializeTimes,updateTimes}  from "./Main"
import {screen,render,fireEvent, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("BookingForm",()=>{
    const initialAvailableTimes = [
        " ","17:00","18:00","19:00","20:00","21:00","22:00"
       ]
    const setAvailableTimesMock = jest.fn();
    const submitFormFn = jest.fn();
    test('renders Reserve your table',()=>{
        render(<BookingForm availableTimes={initialAvailableTimes} setAvailableTimes={setAvailableTimesMock}/>);
        const title = screen.getByText("Reserve your table!");
        expect(title).toBeInTheDocument();      
    })

    test('return initial available times',()=>{
        const now = new Date();
        const result = initializeTimes(now);
        expect(Array.isArray(result)).toBe(true);
    })

    test('return initial available times from updateTimes',()=>{
        const initialAvailableTimes = [
            " ","17:00","18:00","19:00","20:00","21:00","22:00"
           ] 
        const result = updateTimes(initialAvailableTimes,{type:""});
        expect(result).toBe(initialAvailableTimes);
    })
    test('checks date input is date type',()=>{
        render(<BookingForm availableTimes={initialAvailableTimes} setAvailableTimes={setAvailableTimesMock}/>);
        const inputDate = screen.getByLabelText('Event Date:');
        expect(inputDate).toHaveAttribute('type','date');
    })
    test('checks time input is date time',()=>{
        render(<BookingForm availableTimes={initialAvailableTimes} setAvailableTimes={setAvailableTimesMock}/>);
        const inputTime = screen.getByLabelText('Event Time:');
        expect(inputTime).toHaveAttribute('type','time');
    })
    test('checks numberOfGuests input is number time',()=>{
        render(<BookingForm availableTimes={initialAvailableTimes} setAvailableTimes={setAvailableTimesMock}/>);
        const inputNumberOfGuests = screen.getByLabelText('Number of guests:');
        expect(inputNumberOfGuests).toHaveAttribute('type','number');
    })
    test('checks numberOfGuests input is number time',()=>{
        render(<BookingForm availableTimes={initialAvailableTimes} setAvailableTimes={setAvailableTimesMock}/>);
        const inputNumberOfGuests = screen.getByLabelText('Number of guests:');
        expect(inputNumberOfGuests).toHaveAttribute('min','1');
    })
    test('checks occasion input is text type',()=>{
        render(<BookingForm availableTimes={initialAvailableTimes} setAvailableTimes={setAvailableTimesMock}/>);
        const inputOccasion = screen.getByLabelText('Occasion:');
        expect(inputOccasion).toHaveAttribute('type','text');
    })
    test('checks date input with a date before today', async ()=>{
        render(<BookingForm availableTimes={initialAvailableTimes} setAvailableTimes={setAvailableTimesMock}/>);
        const inputDate = screen.getByLabelText('Event Date:');
        const inputTime = screen.getByLabelText('Event Time:');
        const numberOfGuest = screen.getByLabelText('Number of guests:');
        const occasion = screen.getByLabelText('Occasion:')
        const submitButton = screen.getByText('reserve');
        const today = new Date();
        const threedaysbefore = new Date(today);
        threedaysbefore.setDate(threedaysbefore.getDate() - 3);
        const testMonth = threedaysbefore.getMonth() + 1 < 10 ? `0${threedaysbefore.getMonth()+1}` : `${threedaysbefore.getMonth()} + 1`;
        const testDay = threedaysbefore.getDate() < 10 ? `0${threedaysbefore.getDate()}` : `${threedaysbefore.getDate()}`;
        const testDate = `${threedaysbefore.getFullYear()}-${testMonth}-${testDay}`;
       
        //Set the value in Form inputs
       
            fireEvent.change(inputDate,{target:{value:testDate}});
            fireEvent.change(inputTime,{target:{value:'17:00'}});
            fireEvent.change(numberOfGuest,{target:{value:'1'}});
            fireEvent.change(occasion,{target:{value:'Birthday'}});
            fireEvent.click(submitButton);
        
       
       
        expect(inputDate.value).toBe(testDate);
        expect(inputTime.value).toBe("17:00");
        expect(numberOfGuest.value).toBe("1");
        expect(occasion.value).toBe("Birthday");

        const errorText = await screen.findByText('Reservation date cannot be before today');
        expect(errorText).toBeInTheDocument();

    })
    test('checks if form have been submitted', async ()=>{
        const user = userEvent.setup();
        render(<BookingForm availableTimes={initialAvailableTimes} setAvailableTimes={setAvailableTimesMock} submitForm={submitFormFn}/>);
        const inputDate = screen.getByLabelText('Event Date:');
        const inputTime = screen.getByLabelText('Event Time:');
        const numberOfGuest = screen.getByLabelText('Number of guests:');
        const occasion = screen.getByLabelText('Occasion:')
        const submitButton = screen.getByText('reserve');
        const today = new Date();
        const threedaysafter = new Date(today);
        threedaysafter.setDate(threedaysafter.getDate() + 3);
        const testMonth = threedaysafter.getMonth() + 1 < 10 ? `0${threedaysafter.getMonth()+1}` : `${threedaysafter.getMonth()} + 1`;
        const testDay = threedaysafter.getDate() < 10 ? `0${threedaysafter.getDate()}` : `${threedaysafter.getDate()}`;
        const testDate = `${threedaysafter.getFullYear()}-${testMonth}-${testDay}`;
       
        //Set form input values
        fireEvent.change(inputDate,{target:{value:testDate}});
        fireEvent.change(inputTime,{target:{value:'17:00'}});
        fireEvent.change(numberOfGuest,{target:{value:'1'}});
        fireEvent.change(occasion,{target:{value:'Birthday'}});
        await user.click(submitButton);

       
        expect(submitFormFn).toHaveBeenCalledWith({
            date_of_event:testDate,
            time_of_event:'17:00',
            numberOfGuests:1,
            occasion:"Birthday"
        });
    })
})
