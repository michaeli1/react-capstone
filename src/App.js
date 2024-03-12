import React, {useReducer} from "react";
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Booking from './BookingPage';
import About from './About';
import { Route, Routes } from "react-router-dom";
function App() {
  // eslint-disable-next-line
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  function updateTimes(state, date) {
    return {initialState}
  }

  const [state, dispatch] = useReducer(updateTimes, initialState);


  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch}/>} />
        <Route path="/*" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
