import axios from 'axios';

export default class ComputerService {
    static async getComputerByComputerId(computerId) {
        return  await axios.get(`http://localhost:5082/api/Computers/${computerId}`);
    }
}