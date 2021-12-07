'use strict';

export default class ViewModel {

    static callbackList = [];

    constructor() {
        this._firstname = '';
        this._lastname = '';
        this._age = null;
    }

    get firstname() {
        return this._firstname;
    }

    set firstname(value) {
        if (value !== this._firstname) {
            this._firstname = value;
            this.constructor.executeCallbacks(); // Equivalent to ViewModel.executeCallbacks()
        }
    }

    get lastname() {
        return this._lastname;
    }

    set lastname(value) {
        if (value !== this._lastname) {
            this._lastname = value;
            this.constructor.executeCallbacks(); // Equivalent to ViewModel.executeCallbacks()
        }
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (Number(value) !== this._age) {
            this._age = Number(value);
            this.constructor.executeCallbacks();
        }
    }

    static onEvent(elem, eventName, cb) {
        elem.addEventListener(eventName, () => cb(elem));
    }

    static onPropertyChange(cb) {
        // this refers to the ViewModel class
        this.callbackList.push(cb);
    }

    static executeCallbacks() {
        // this refers to the ViewModel class
        this.callbackList.forEach((cb) => cb());
    }
}
