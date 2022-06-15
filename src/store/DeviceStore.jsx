import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._humidity = []
        this._temperature = []
        this._enabled = false
        makeAutoObservable(this)

    }


    /*Humidity and Temperature*/
    setHumidity(humidity) {
        this._humidity = humidity
    }

    setTemperature(temperature) {
        this._temperature = temperature
    }

    setEnabled(enabled) {
        this._enabled = enabled
    }

    get humidity() {
        return this._humidity
    }

    get temperature() {
        return this._temperature
    }

    get enabled() {
        return this._enabled
    }

}