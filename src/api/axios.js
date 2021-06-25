import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID kMzifZYOcGKlxXhYWKF7umfEZ8Zxfnv6wGPKiS7ILic'
    }
})
