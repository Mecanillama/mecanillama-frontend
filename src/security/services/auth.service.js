import axios from "axios";
import http from "../../core/services/http-common";


const API_URL = "https://mecanillamaapi20220627212013.azurewebsites.net/api/v1/users/sign-up";
const API_URL_SIGNIN = "https://mecanillamaapi20220627212013.azurewebsites.net/api/v1/users/sign-in";

class AuthService {
    signUp(user) {
        return http.post(API_URL, user);
    }

    signIn(user){
        return http.post(API_URL_SIGNIN, user);
    }
    // Get Current User
    getCurrentUser() {
        return localStorage.getItem("user");
      }
}
export default new AuthService();
