import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode"

export const registration = async (login, password, role, companyId) => {
const {data} = await $authHost.post('api/user/adduser', {login, password, role, companyId})
//console.log(login, password, role, companyId)
 //   const isAdd = true
 //   return isAdd
}

export const login = async (login, password) => {
    const {data} = await $host.post('api/user/login', {login, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}