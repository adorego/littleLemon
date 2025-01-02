import BookingForm from "./BookingForm";
import {initializeTimes,updateTimes}  from "./Main"
import {screen,render} from "@testing-library/react";

describe("BookingForm",()=>{
    test('renders Reserve your table',()=>{
        const initialAvailableTimes = [
            " ","17:00","18:00","19:00","20:00","21:00","22:00"
           ]
        const setAvailableTimesMock = jest.fn();
        render(<BookingForm availableTimes={initialAvailableTimes} setAvailableTimes={setAvailableTimesMock}/>);
        const title = screen.getByText("Reserve your table");
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
})