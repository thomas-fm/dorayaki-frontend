import axios from 'axios'
import api from './api'

class StockAPI {
    get(id) {
        return api.get(`/stocks/${id}`)
    }
    getVariant(id, varID) {
        return api.get(`/stocks/${id}/variant/${varID}`)
    }
    delete(id) {
        return api.delete(`/stores/${id}`)
    }
    update(id, varID, data) {
        return api.put(`/stocks/${id}/variant/${varID}`, data)
    }
}

export default new StockAPI()
