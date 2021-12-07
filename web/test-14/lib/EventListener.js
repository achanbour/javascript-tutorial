'use strict';

export default function EventListener(sender) {
    this.sender = sender;
    this.listeners = [];
}

EventListener.prototype = {
    // Attaches a listener to be called when notified
    attach: function (listener) {
        this.listeners.push(listener);
    },

    // Notifies all the listeners
    notify: function (args) {
        for (const listener of this.listeners) {
            listener(this.sender, args);
        }
    },
};
