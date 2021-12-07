'use strict';

export default function Controller(model, view) {
    this.model = model;
    this.view = view;

    let self = this;

    // Attaches listeners to respond to events fired by the View
    this.view.listModified.attach(function (sender, args) {
        self.updateSelectedIndex(args.index);
    });

    this.view.addButtonClicked.attach(function () {
        self.addItem();
    });

    this.view.delButtonClicked.attach(function () {
        self.removeItem();
    });
}

Controller.prototype = {
    addItem: function () {
        let item = window.prompt('Add item:');
        if (item && item.trim()) {
            this.model.addItem(item.trim());
        }
    },

    removeItem: function () {
        let index = this.model.getSelectedIndex();
        if (index !== -1) {
            this.model.removeItemAt(index);
        }
    },

    updateSelectedIndex: function (index) {
        this.model.setSelectedIndex(index);
    },
};
