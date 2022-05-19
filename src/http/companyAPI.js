import {$authHost, $host} from "./index";

export const createCompany = async (name) => {
    const {data} = await $authHost.post('api/company', name)
    return data
}

export const fetchCompanies = async () => {
    const {data} = await $authHost.get('api/company')
    return data
}

