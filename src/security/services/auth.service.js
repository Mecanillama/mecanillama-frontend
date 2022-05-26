import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/auth/";

class AuthService {
    login(user) {
        return axios
        .post(API_URL, {
            username: user.username,
            password: user.password,
        })
        .then((response) => {
            if (response.data.token) {
            console.log("user:" + response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    logout() {
        localStorage.removeItem("user");
    }
    register(user) {
        return axios.post(API_URL + "sign-up", {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        password: user.password,
        });
    }
}
export default new AuthService();
