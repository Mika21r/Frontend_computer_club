import axios from 'axios';

export default class SeatService {
    static async getSeatsByAuditoriumId(auditoriumId) {
        return  await axios.get(`http://localhost:5082/api/Seats/GetSeatsByAuditoriumId/${auditoriumId}`);
    }
    static async getSeats() {
        return  await axios.get(`http://localhost:5082/api/Seats`);
    }
}