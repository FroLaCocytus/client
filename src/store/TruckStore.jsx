import {makeAutoObservable} from "mobx";

export default class TruckStore {
    constructor() {
        this._companies = []
        this._trucks = []
        this._selectedCompany = {}
        makeAutoObservable(this)
    }

    setCompanies(companies) {
        this._companies = companies
    }
    setTrucks(trucks) {
        this._trucks = trucks
    }

    setSelectedCompany(company){
      this._selectedCompany = company
    }

    get companies() {
        return this._companies
    }
    get trucks() {
        return this._trucks
    }
    get selectedCompany() {
        return this._selectedCompany
    }
}