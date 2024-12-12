import axios from 'axios';

export default class BookingService {
    static async createBooking({ClientId, DateBooking, AmountHours, Cost}) {

        return await axios({
            method: 'post',
            url: "http://localhost:5082/api/Bookings",
            data: {
                ClientId,
                DateBooking,
                AmountHours,
                Cost
            }
          });
    }
}