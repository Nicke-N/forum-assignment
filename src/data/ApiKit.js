import axios from 'axios'

const ROOT_URL = 'https://lab.willandskill.eu'
const USER_URL = `${ROOT_URL}/api/v1/auth/users/`
const PROFILE_URL = `${ROOT_URL}/api/v1/me/`
const COUNTRIES_URL = `${ROOT_URL}/api/v1/countries/`

const POSTSANDREPLIES_URL = `${ROOT_URL}/api/v1/forum/posts/`
const CATEGORIES_URL = `${ROOT_URL}/api/v1/forum/categories/`

const authHeader = () => {
    return {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
}

const authPostHeader = () => {
    return {
        headers: {
             "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
}



export default class {
    fetchPostList() {
        return fetch(POSTSANDREPLIES_URL, authHeader())
    }

    fetchPostReplies(postId) {
        return fetch(POSTSANDREPLIES_URL+postId+'/replies', authHeader())
    }

    fetchPostDetails(postId) {
        return fetch(POSTSANDREPLIES_URL+postId, authHeader())
    }


    fetchCurrentUserInfo () {
        return fetch(PROFILE_URL, authHeader())
    }

    fetchCountries() {
       return fetch(COUNTRIES_URL)

    }

    

    async createUser(payload) {
      
        try {
            return await axios.post(USER_URL, payload)
        } catch (error) {
            return error.response
        }
       
    }

    createPost(payload) {
        return fetch(
            POSTSANDREPLIES_URL,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(payload)
            }
        )
    }

    createReply(payload) {
        return fetch(
            `${POSTSANDREPLIES_URL}`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(payload)
            }
        )
    }

    fetchCategories() {
        return fetch(CATEGORIES_URL, authHeader())
    }
}