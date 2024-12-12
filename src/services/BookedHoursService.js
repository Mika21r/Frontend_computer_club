import axios from 'axios';

export default class  BookedHours{
    static async createBookedHour({bookingId, hourForBookingId}) {

        return await axios({
            method: 'post',
            url: "http://localhost:5082/api/BookedHours",
            data: {
                bookingId,
                hourForBookingId
            }
          });
    }
    static async getBookedHoursByDateAndSeatId(date, seatId) {
        return  await axios.get(`http://localhost:5082/api/BookedHours/DateTime${date}/seatId${seatId}`);
    }
}