import axios from 'axios'
import api from './api'

class StockAPI {
    get(id) {
        return api.get(`/stocks/${id}`)
    }
    getVariant(id, varID) {
        return api.get(`/stocks/${id}/variant/${varID}`)
    }
    update(id, varID, data) {
        return api.put(`/stocks/${id}/variant/${varID}`, data)
    }
    delete(id, varID) {
        return api.delete(`/stocks/${id}/variant/${varID}`)
    }
    insert(id, data) {
        return api.post(`/stocks/${id}`, data)
    }
}

export default new StockAPI()
