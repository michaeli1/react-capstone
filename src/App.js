import React, { useReducer } from "react";
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Booking from './BookingPage';
import About from './About';
import ConfirmedBooking from './ConfirmedBooking';
  // eslint-disable-next-line
import { Route, Routes, useNavigate } from "react-router-dom";
function App() {

  const seededRandom = seed => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;

    return () => (s = s * a % m) / m;
  };

  const fetchAPI = date => {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) result.push(i + ':00');
      if (random() < 0.5) result.push(i + ':30');
    }

    return result;
  };

  // eslint-disable-next-line
  const submitAPI = formData => true;

  function initializeTimes() {
    return { availableTimes: fetchAPI(new Date()) }
  }

  const initialState = initializeTimes();

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date(date)) }
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    console.log(formData);
    if (submitAPI(formData)) {
      navigate("/confirmed");
    };
  }

  const [state, dispatch] = useReducer(updateTimes, initialState);

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/*" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
