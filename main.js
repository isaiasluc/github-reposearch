var buttonElement = document.querySelector('#app button');
var inputElement = document.querySelector('#app input');
var listElement = document.querySelector('#app ul');

function searchRepos(event) {
    if (event.key === 'Enter') {
        getRepo();
    }

    return;
}

function getRepo() {
    console.log(event);

    prepNewList();

    const user = `https://api.github.com/users/${inputElement.value}/repos`;

    axios.get(user)
        .then(loading())
        .then((response) => renderItems(response))
        .catch((error) => console.log(error));
}

function loading() {
    generateElement('li', 'Carregando...');
}

function prepNewList() {
    listElement.innerHTML = "";
}

function renderItems(response) {
    prepNewList();

    for (const {name, html_url} of response.data) {
        generateElement('a', name, html_url);
    }
}

function generateElement(elementType, appendedText, setLink) {
    const listItem = document.createElement(elementType);
    const textList = document.createTextNode(appendedText)

    listItem.appendChild(textList);
    listElement.appendChild(listItem);

    if (!!setLink) {
        listItem.setAttribute('href', setLink);

        const listItemLinked = document.createElement('li');

        listItemLinked.appendChild(listItem);
        listElement.appendChild(listItemLinked);
    }
}
