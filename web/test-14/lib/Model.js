'use strict';

import EventListener from './EventListener.js';

export default function Model(items) {
    // Stored properties
    this.items = items;
    this.selectedIndex = -1;

    // Listeners are defined in the View
    this.itemAdded = new EventListener(this);
    this.itemRemoved = new EventListener(this);
}

Model.prototype = {
    // Getters can be accessed by both the Controller and the View
    getItems: function () {
        return [].concat(this.items);
    },

    getSelectedIndex: function () {
        return this.selectedIndex;
    },

    // Setters are *only* accessible by the Controller
    addItem: function (item) {
        this.items.push(item);
        this.itemAdded.notify({});
    },

    removeItemAt: function (index) {
        this.items.splice(index, 1);
        this.itemRemoved.notify({});

        if (index === this.selectedIndex) {
            this.setSelectedIndex(-1);
        }
    },

    setSelectedIndex: function (index) {
        this.selectedIndex = index;
    },
};
