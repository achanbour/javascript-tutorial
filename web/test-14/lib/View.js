'use strict';

import EventListener from './EventListener.js';

export default function View(model, elements) {
    this.model = model;

    this.ui = elements;

    // Listeners are defined in the Controller
    this.listModified = new EventListener(this);
    this.addButtonClicked = new EventListener(this);
    this.delButtonClicked = new EventListener(this);

    let self = this;

    // Attaches listeners to respond to events fired by the Model
    this.model.itemAdded.attach(function () {
        self.rebuildList();
    });

    this.model.itemRemoved.attach(function () {
        self.rebuildList();
    });

    // Notifies the Controller listeners to handle user actions
    this.ui.list.onchange = function (e) {
        self.listModified.notify({
            index: e.target.selectedIndex,
        });
    };

    this.ui.addButton.onclick = function () {
        self.addButtonClicked.notify({});
    };

    this.ui.delButton.onclick = function () {
        self.delButtonClicked.notify({});
    };
}

View.prototype = {
    render: function () {
        this.rebuildList();
    },

    // Rebuild the whole list if the Model data has been updated
    rebuildList: function () {
        this.ui.list.innerHTML = '';

        let items = this.model.getItems();
        for (const key in items) {
            if (items.hasOwnProperty(key)) {
                this.ui.list.appendChild(document.createElement('option'))
                    .appendChild(document.createTextNode(items[key]));
            }
        }

        // The View *never* updates the Model itself but delegates to the Controller instead
        this.listModified.notify({
            index: -1,
        });
    },
};
