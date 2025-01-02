import './App.css';
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
         <Route path='/' element={<HomePage />} />
         <Route path="/booking" element={<BookingPage />} />
         <Route path="/booking/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </>
    
    
  );
}

export default App;
