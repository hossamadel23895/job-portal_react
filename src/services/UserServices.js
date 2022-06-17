import axios from "axios";

export class UserServices {
    url = "http://127.0.0.1:8000/api/v1/account/";

    get(id) {
        return axios.get(this.url + `user/${id}`).then(response => {
            return response.data;
        }).catch(error => {
            return error.response.data;
        })
    }

    getAll() {

    }

    register(user) {
        return axios.post(this.url + "register", user).then(response => {
            return response.data;
        }).catch(error => {
            return error.response.data;
        });
    }

    login(user) {
        return axios.post(this.url + "login", user).then(response => {
            return response.data;
        }).catch(error => {
            return error.response.data;
        })
    }
}