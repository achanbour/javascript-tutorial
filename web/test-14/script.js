'use strict';

import Model from './lib/Model.js';
import View from './lib/View.js';
import Controller from './lib/Controller.js';

window.onload = function () {
    let model = new Model(['PHP', 'JavaScript']);

    let view = new View(model, {
        list: document.getElementById('list'),
        addButton: document.getElementById('btn-add'),
        delButton: document.getElementById('btn-del'),
    });

    let controller = new Controller(model, view);

    view.render();
};
