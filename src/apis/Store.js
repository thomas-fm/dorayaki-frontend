import axios from 'axios'
import api from './api'

class StoreAPI {
    get() {
        return api.get('/stores/')
    }
    getById(id) {
        return api.get(`/stores/${id}`)
    }
    delete(id) {
        return api.delete(`/stores/${id}`)
    }
    insert(data) {
        return api.post(`/stores/`, data)
    }
}

export default new StoreAPI()
