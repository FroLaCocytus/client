import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    this._role = {};
    this._company = {};
    this._login = {};

    makeAutoObservable(this);
  }

  setLogin(login) {
    this._login = login;
  }

  get login() {
    return this._login;
  }
  

  setCompany(company) {
    this._company = company;
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setUser(user) {
    this._user = user;
  }

  setRole(role) {
    this._role = role;
  }

  get company() {
    return this._company;
  }
  
  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }

  get role() {
    return this._role;
  }
}
