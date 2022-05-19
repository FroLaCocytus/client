import {$authHost, $host} from "./index";

export const createTruck = async (truck) => {
    const {data} = await $authHost.post('/api/truck', truck)
    return data
}

export const fetchTrucks = async () => {
    const {data} = await $host.get('/api/truck')
    return data
}

export const fetchOneTrucks = async (id) => {
    const {data} = await $authHost.get('/api/truck' + id )
    return data 
}

