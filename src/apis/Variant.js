import axios from 'axios'
import api from './api'

class VariantAPI {
    get() {
        return api.get('/variants/')
    }
    delete(id) {
        return api.delete(`/variants/${id}`)
    }
}

export default new VariantAPI()
