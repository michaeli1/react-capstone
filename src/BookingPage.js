import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
    return <main>
        <section id="form-section">
            <BookingForm availableTimes={props.availableTimes}/>
        </section>
    </main>
}
export default Booking;