import axios from "axios";
import http from "../../core/services/http-common";


const API_URL = "http://localhost:3000/api/v1/auth/sign-up";

class AuthService {
    signUp(user) {
        return http.post(API_URL, user);
    }
}
export default new AuthService();
