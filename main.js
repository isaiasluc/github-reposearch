var buttonElement = document.querySelector('#app button');
var inputElement = document.querySelector('#app input');
var listElement = document.querySelector('#app ul');

function getRepo() {
    listElement.innerHTML = "";
    var user = (`https://api.github.com/users/${inputElement.value}/repos`);
    axios.get(user)
    .then(loading()) 

    .then(function(response) {
        //Retorna a response e salvamos somente os dados em uma variável data;
        renderItems(response);                    
    })
    
    .catch(function(error) {
        alert(error);
        console.log(error);
    })
}

function loading() {
    let listItem = document.createElement('li');
    let textList = document.createTextNode('Carregando...');
    listItem.appendChild(textList);
    listElement.appendChild(listItem);
}

function renderItems(response) {
    listElement.innerHTML = "";
    for (let i=0; i<response.data.length; i++) {
        let data = response.data[i].name;
        
        let listItem = document.createElement('li');
        let textElement = document.createTextNode(data);
        
        listItem.appendChild(textElement);
        listElement.appendChild(listItem);                
    }
}
