import axios from "axios"

axios.defaults.baseURL = 'http://termotoptiu72.ru:5000/'

const $host = axios.create({
    baseUrl: '/'
})

const $authHost = axios.create({
    baseUrl: '/'
    
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
