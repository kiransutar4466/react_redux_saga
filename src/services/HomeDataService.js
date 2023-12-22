import AppDataService from './AppDataService'
import { customHeaders } from './utils/constants'

const COMMON_BASE = 'home'

export default class HomeDataService {

    static async getApiDetails(token) {
        return await AppDataService.get(`${COMMON_BASE}/GetApiDetails`, { params: { sdfsdfsd: '654654', asdfasdf: '454' }, ...customHeaders(token) })
    }
}