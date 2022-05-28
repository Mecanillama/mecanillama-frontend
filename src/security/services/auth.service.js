import axios from "axios";
import http from "../../core/services/http-common";


const API_URL = "http://localhost:3000/api/v1/auth/sign-up";
const API_URL_SIGNIN = "http://localhost:3000/api/v1/auth/sign-in";

class AuthService {
    signUp(user) {
        return http.post(API_URL, user);
    }

    signIn(user){
        return http.post(API_URL_SIGNIN, user);
    }

    // getCurrentUser(){
    //     return localStorage.getItem('currentUser')
    // }
}
export default new AuthService();
