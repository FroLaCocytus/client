import {$authHost, $host} from "./index";

export const fetchOneDevice = async (truckId) => {
    const {data} = await $authHost.get('/api/device/one/id', {params: {
        truckId
    }})
    return data 
}

export const fetchTemperature = async (startDate, endDate) => {
    const {data} = await $authHost.get('/api/temperature/', {params: {
        startDate, endDate
    }})
    return data 
}

export const fetchHumidity = async (startDate, endDate) => {
    const {data} = await $authHost.get('/api/humidity/', {params: {
        startDate, endDate
    }})
    return data 
}



