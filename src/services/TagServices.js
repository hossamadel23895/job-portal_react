import axios from "axios";

export class TagServices {
    url = " http://127.0.0.1:8000/tags/"

    get(id) {
        return axios.get(this.url + id).then(response => {
            return response.data;
        }).catch(error => {
            return error.response.data;
        })
    }

    getAll() {
        return axios.get(this.url).then(response => {
            return response.data;
        }).catch(error => {
            return error.response.data;
        })
    }

    create(tag) {
        return axios.post(this.url, tag).then(response => {
            return response.data;
        }).catch(error => {
            return error.response.data;
        })
    }

    update(tag) {
        return axios.put(this.url, tag).then(response => {
            return response.data;
        }).catch(error => {
            return error.response.data;
        })
    }

    delete(id) {
        return axios.delete(this.url + id).then(response => {
            return response.data;
        }).catch(error => {
            return error.response.data;
        })
    }
}