import axios from 'axios';

export default class HoursForBooking {
    static async GetHoursForBookingByDateAndSeatId(date, seatId) {
        return  await axios.get(`http://localhost:5082/api/HoursForBooking/DateTime${date}/seatId${seatId}`);
    }
}