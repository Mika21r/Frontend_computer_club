import { useEffect, useState } from "react";
import HoursForBooking from "../../../../services/HoursForBooking";
import BookedHours from "../../../../services/BookedHoursService";
import BookingService from "../../../../services/BookingService";

import {useFetching} from "../../../../hooks/useFetching";

import "./bookingSeat.css";
import { getFullDate } from "../../../../util/convertDate";

const BookingSeat = ({seatData, setBooked}) => {
    // const [choisedDate, setChoisedDate] = useState(new Date().toLocaleDateString().split(".").reverse().join("-"));
    
    const [choisedDate, setChoisedDate] = useState("2024-01-20");
    const [hoursForBooking, setHoursForBooking] = useState([]);
    const [bookedHours, setBookedHours] = useState([]);
    const [selectedHours, setSelectedHours] = useState([]);

    const [fetchHoursForBooking, HoursForBookingLoader, HoursForBookingError] = useFetching(async () => {
        let response = await HoursForBooking.GetHoursForBookingByDateAndSeatId(choisedDate, seatData.seatId);
        console.log(choisedDate, seatData.seatId)
        console.log(response.data)
        setHoursForBooking(response.data);
    });

    const [fetchBookedHours, BookedHoursLoader, BookedHoursError] = useFetching(async () => {
        console.log(choisedDate, seatData.seatId)
        let response = await BookedHours.getBookedHoursByDateAndSeatId(choisedDate, seatData.seatId);
        console.log(response.data)
        setBookedHours(response.data);

    });

    useEffect(() => {
        setSelectedHours([]);
        fetchHoursForBooking();
        fetchBookedHours()
    }, [choisedDate]);

    function selectHour(hourBooking) {

        if(selectedHours.find(hour => hour.hourForBookingId === hourBooking.hourForBookingId)) {
            
            let result = selectedHours.filter(hour => hour.hourForBookingId !== hourBooking.hourForBookingId);
            setSelectedHours(result)
        }
        else {
            setSelectedHours([...selectedHours, hourBooking].sort((a, b) => +a.hour.split(":")[0] - +b.hour.split(":")[0]));
            console.log(selectedHours);
        }
    }
    async function payment() {
        const Booking = {
            ClientId: 1,
            DateBooking: getFullDate(new Date()),
            AmountHours: selectedHours.length,
            Cost: selectedHours[0].cost
        }
        try {

        
            let response = await BookingService.createBooking(Booking);
            console.log(response.data);
            let promises = [];
            selectedHours.forEach(selectedHour => {
                console.log({
                    bookingId: response.data.bookingId,
                    hourForBookingId: selectedHour.hourForBookingId
                });
                promises.push(BookedHours.createBookedHour(
                    {
                        bookingId: response.data.bookingId,
                        hourForBookingId: selectedHour.hourForBookingId
                    }
                ));
                
            })

            let resp = await Promise.all(promises);
            setBooked(false);
        } catch(err) {
            console.log(err.message)
        }
    }
    return ( 
        <>
            <div className="bookingHours">
                <div className="top__block">
                    <div className="back" onClick={() => setBooked(false)}>Назад</div>
                    <div className="choise__date">
                        <input 
                            className="date" 
                            type="date" 
                            id="start" 
                            value={choisedDate} 
                            // min={new Date().toLocaleDateString().split(".").reverse().join("-")} 
                            min={"2024-01-20"}
                            max="2024-01-28" 
                            onChange={(e) => setChoisedDate(e.target.value)}
                        />
                    </div>
                </div>
                <h2 className="booking__hours__title">Часы для бронирования</h2>
                <div className="selected__hours">
                    <div className="selected__hours__title">Выбрано:</div>
                    <div className="hours__block">
                    {
                        selectedHours.map(hour => (
                            <div 
                            className="hour__block"
                            key={hour.hourForBookingId}>
                                {`c ${hour.hour} по ${hour.hour !== "23:00" ? (+hour.hour.split(":")[0] < 10 ? "0" + (+hour.hour.split(":")[0] + 1) : +hour.hour.split(":")[0] + 1) + ":00" : "00:00" }`}
                            </div> 
                        ))
                    }
                    </div>
                </div>
                <div className="hours__booking">
                    {
                        hoursForBooking.map(hourForBooking => (
                            bookedHours?.find(bookedHour => bookedHour.hourForBookingId == hourForBooking.hourForBookingId)
                            ?
                            <div 
                                key={hourForBooking.hourForBookingId} 
                                className="hourForBooking booked"
                            >
                            {hourForBooking.hour}
                            </div>
                            :
                            <div 
                                key={hourForBooking.hourForBookingId} 
                                className={selectedHours.find(hour => hour.hourForBookingId === hourForBooking.hourForBookingId) ? "hourForBooking selected" :  "hourForBooking"}
                                onClick={() => selectHour(hourForBooking)}
                            >
                                {hourForBooking.hour}
                            </div>
                        )) 
                    }
                </div>
                {
                    
                    <button className={selectedHours.length > 0 ? "booking__btn" : "booking__btn hidden"} onClick={payment}>Забронировать</button>
                    
                }
            </div>
        </> 
    );
}
 
export default BookingSeat;