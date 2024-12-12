import $api from "../http";


export default class AuthService {
    static async login(email, password) {
        return $api.post('/Auth/login', {email, password})
    }

    static async registration(userName, phoneNumber, email, password) {
        return $api.post('/Auth/register', {userName, phoneNumber, email, password})
    }

    static async logout() {
        return $api.post('/logout')
    }
}
