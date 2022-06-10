import {makeAutoObservable} from "mobx";

export default class TruckStore {
    constructor() {
        this._companies = []
        this._trucks = []
        this._selectedCompany = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 6
        makeAutoObservable(this)
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }

    setLimit(limit) {
        this._limit = limit
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

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
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