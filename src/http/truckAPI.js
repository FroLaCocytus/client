import {$authHost, $host} from "./index";

export const createTruck = async (model, number, regionNumber, companyId) => {
    const {data} = await $authHost.post('/api/truck', {model, number, regionNumber, companyId})
    return data
}

export const updateKey = async (id, connect_key) => {
    const {data} = await $authHost.post('/api/truck//one', {id, connect_key})
    return data
}

export const fetchTrucks = async (page, limit, companyId) => {
    const {data} = await $authHost.get('/api/truck', {params: {
        page, limit, companyId
    }})
    return data
}

export const fetchOneTrucks = async (id, companyId) => {
    const {data} = await $authHost.get('/api/truck/' + id, {params: {
        companyId
    }})
    return data 
}

