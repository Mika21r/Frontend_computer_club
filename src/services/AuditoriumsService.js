import axios from 'axios';

export default class AuditoriumsService {
    static async getAuditoriums() {
        return  await axios.get(`http://localhost:5082/api/Auditoriums`);
    }
}