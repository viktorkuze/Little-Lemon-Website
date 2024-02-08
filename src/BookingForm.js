import React from "react";
import { useState } from "react";



const BookingForm = (props) => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState ("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return ( 
        <header>
            <section className="bookingPage">
                <form onSubmit={handleSubmit}>
                    <fieldset className="formfield">
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input id="bookingName" value={name} onChange={(e) => setName(e.target.value)} type="text" required/>
                        </div>
                        <div>
                            <label htmlFor="email">E-mail:</label>
                            <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required/>
                        </div>
                        <div>
                            <label htmlFor="bookingDate">Date:</label>
                            <input id="bookingDate" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                        </div>
                        <div>
                            <label htmlFor="bookingOccasion">Occasion:</label>
                            <select id="bookingOccasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                                <option value="">Choose Occasion</option>
                                <option>Anniversary</option>
                                <option>Birthday</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="bookingTime">Time:</label>
                            <select id="bookingTime" value={time} onChange={(e) => setTime(e.target.value)} required>
                                <option value="">Chose Time</option>
                                {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="bookinGuests">Number of guests:</label>
                            <input id="bookingGuests"  min = "1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={8} required></input>
                        </div>
                        <div>
                            <label htmlFor="bookingLocation">Location:</label>
                            <select id="bookingLocation" value={location} onChange={(e) => setLocation(e.target.value)} required>
                                <option value="">Select your table</option>
                                <option>Normal table inside</option>
                                <option>Table with fireplace inside</option>
                                <option>Table next to the aquarium</option>
                                <option>Table on the balcony</option>
                            </select>
                        </div>
                        <div className="buttonReservation">
                            <input aria-label="On Click" type={"submit"} value={"Confirm Reservation"}></input>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
     );
}
 
export default BookingForm;