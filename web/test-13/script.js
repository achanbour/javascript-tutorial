'use strict';

import ViewModel from './viewmodel.js';

const inputFirstname = document.getElementById('first-name');
const inputLastname = document.getElementById('last-name');
const inputAge = document.getElementById('age');
const outputParagraph = document.getElementById('output');
const resetButton = document.getElementById('reset');

var viewModel = new ViewModel();

// Put input into the model by observing the DOM for events
ViewModel.onEvent(inputFirstname, 'blur', (elem) => viewModel.firstname = elem.value);
ViewModel.onEvent(inputLastname, 'blur', (elem) => viewModel.lastname = elem.value);
ViewModel.onEvent(inputAge, 'keyup', (elem) => viewModel.age = elem.value);
ViewModel.onEvent(resetButton, 'click', () => {
    viewModel.firstname = '';
    viewModel.lastname = '';
    viewModel.age = 0;
    outputParagraph.innerText = 'Fill out the form!';
});

// Register the callback if any property changes
ViewModel.onPropertyChange(() => {
    inputFirstname.value = viewModel.firstname;
    inputLastname.value = viewModel.lastname;
    inputAge.value = viewModel.age;
    outputParagraph.innerText = `Hi ${viewModel.firstname} ${viewModel.lastname}. You are ${viewModel.age} years old`;
});
