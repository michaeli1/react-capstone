import React from "react";
import { useState } from "react";
const BookingForm = (props) => {
    const [formData, setFormData] = useState({
        date: "",
        time: props.availableTimes[0],
        guests: "",
        occasion: "birthday"
    });

    // const [date, setDate] = useState("");
    // const [time, setTime] = useState("");
    // const [guests, setGuests] = useState("");
    // const [occasion, setOccasion] = useState("");
    const handleDateChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            date: e
        }));

        props.dispatch(e);
    }

    return <form onSubmit={props.submitForm(formData)}>
        <fieldset>
            <legend>Book a table at our restaurant</legend>
            <div>
                <label htmlFor="reservation-date">Choose Date</label>
                <input type="date" value={formData.date} id="reservation-date" onChange={(e) => handleDateChange(e.target.value)} />
            </div>
            <div>
                <label htmlFor="reservation-time">Choose Time</label>
                <select id="reservation-time" value={formData.time} onChange={(e) => setFormData((prevFormData) => ({...prevFormData, time: e.target.value}))}>
                    {props.availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="guest-number">Number of Guests</label>
                <input id="guest-number" value={formData.guests} type="number" min="1" max="10" onChange={(e) => setFormData((prevFormData) => ({...prevFormData,guests: e.target.value}))} />
            </div>
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={formData.occasion} onChange={(e) => setFormData((prevFormData) => ({...prevFormData,occasion: e.target.value}))}>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Book a Reservation" />
            </div>
        </fieldset>
    </form>
}

export default BookingForm;