'use strict';

var url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

var request = new XMLHttpRequest();

// Open asynchronous request
request.open('GET', url);
request.responseType = 'json';
request.send();

function heroCard(hero) {
    // Creates card container
    var article = document.createElement('article');

    // Creates card inner tags
    var h2 = document.createElement('h2');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var ul = document.createElement('ul');

    h2.textContent = hero.name;
    p1.textContent = 'Secret identity: ' + hero.secretIdentity;
    p2.textContent = 'Age: ' + hero.age;

    // Get hero superpowers
    var superPowers = hero.powers;

    // Add each superpower to the ul element
    for (let i = 0; i < superPowers.length; i++) {
        var li = document.createElement('li');
        li.textContent = superPowers[i];
        ul.appendChild(li);
    }

    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(ul);

    // Return created hero card
    return article;
}

request.onload = function () {
    // Get response as json object
    var jsonObj = request.response;

    // Select containers
    var header = document.querySelector('header');
    var section = document.querySelector('section');

    // Creates header inner tags
    var h1 = document.createElement('h1');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');

    h1.textContent = jsonObj.squadName;
    p1.textContent = 'Hometown: ' + jsonObj.homeTown;
    p2.textContent = 'Formed: ' + jsonObj.formed;

    header.appendChild(h1);
    header.appendChild(p1);
    header.appendChild(p2);

    // Get heroes
    var heroes = jsonObj.members;

    // Add each hero card to the section element
    for (let i = 0; i < heroes.length; i++) {
        section.appendChild(heroCard(heroes[i]));
    }
};
