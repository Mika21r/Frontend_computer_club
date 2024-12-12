import axios from 'axios';

export default class OtchetsService {
    static async getOthcetForComputerByComputerId(computerId) {
        return  await axios({
            url: `http://localhost:5082/api/Otchets/${computerId}`,
            method: 'GET',
            responseType: 'blob'
        });
    }

    static async getOthcetForComputers() {
        return  await axios({
            url: `http://localhost:5082/api/Otchets`,
            method: 'GET',
            responseType: 'blob'
        });
    }
}