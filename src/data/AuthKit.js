import axios from 'axios'
const ROOT_URL = 'https://lab.willandskill.eu'
const AUTH_URL = `${ROOT_URL}/api/v1/auth/api-token-auth/`


export default class {
    async login(payload) {
        try {
            const res = await axios.post(AUTH_URL, payload)
            if (res.data.token) {
                localStorage.setItem('token', res.data.token)
            }
            return res.status
        } catch (error) {
            console.log(error.response)
            return error.response
        }
    }
}
