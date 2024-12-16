import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from 'axios';
import { API_URL } from "../http";

export default class Store {
    isAuth = false;
    isLoading = false;
    userRoles = [];

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUserRoles(arr) {
        this.userRoles = arr;
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.message);
            this.userRoles = response.data.roles;
            localStorage.setItem('roles', JSON.stringify(this.userRoles)); // Сохраняем как JSON-строку
            this.setAuth(true);
            return true;
        } catch (e) {
            console.error("Login error:", e);
            return false; // Явно возвращаем false при ошибке
        }
    }

    async registration(userName, phoneNumber, email, password) {
        try {
            const response = await AuthService.registration(userName, phoneNumber, email, password);
            localStorage.setItem('token', response.data.message);
            this.setAuth(true);
            return true;
        } catch (e) {
            console.error("Registration error:", e);
            return false; // Явно возвращаем false при ошибке
        }
    }

    async logout() {
        try {
            localStorage.removeItem('token');
            localStorage.removeItem('roles'); // Удаляем roles из localStorage
            this.setAuth(false);
            this.setUserRoles([]);
        } catch (e) {
            console.error("Logout error:", e);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const token = localStorage.getItem('token');
            if (token) { // Проверяем наличие токена
                const rolesString = localStorage.getItem('roles');
                this.userRoles = rolesString ? JSON.parse(rolesString) : []; // Парсим строку в массив
                //Раскомментируйте и исправьте API_URL если это необходимо для проверки токена на сервере
                // const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
                // this.userRoles = response.data.roles;
                this.setAuth(true);
            } else {
                this.setAuth(false);
            }
        } catch (e) {
            console.error("CheckAuth error:", e);
            this.setAuth(false); // Устанавливаем isAuth в false при ошибке
        } finally {
            this.setLoading(false);
        }
    }
}
