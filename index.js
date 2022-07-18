const form = document.querySelector('form')

function addNewHouse(){
    new App().add()
}

form.addEventListener('submit', addNewHouse)