import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from 'axios';
import {API_URL} from "../http";

export default class Store {
    isAuth = false;
    isLoading = false;
    userRoles = [];
    
    // navigate = useNavigate();

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUserRoles(arr) {
        this.userRoles = arr;
    }
    // setUser(user: IUser) {
    //     this.user = user;
    // }

    setLoading(bool) {
        this.isLoading = bool;
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.message);
            this.userRoles = response.data.roles;
            localStorage.setItem('roles',  this.userRoles );
            this.setAuth(true);
            console.log(response.data);
            return true;
            // this.navigate('/');
        } catch (e) {
            
            console.log(e);
            
          
        }
    }

    async registration(userName, phoneNumber, email, password ) {
        try {
            const response = await AuthService.registration(userName, phoneNumber, email, password);
     
            localStorage.setItem('token', response.data.message);
            this.setAuth(true);
        } catch (e) {
            console.log(e);
        }
    }
 
    async logout() {
        try {
            // const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUserRoles([]);
            
            // this.setUser({} as IUser);
        } catch (e) {
            console.log(e);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            this.setUserRoles(localStorage.getItem('roles'));
            // const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            // console.log(response);
            // localStorage.setItem('token', response.data.message);
            this.setAuth(true);
        } catch (e) {
            console.log(e);
        } finally {
            this.setLoading(false);
        }
    }
}