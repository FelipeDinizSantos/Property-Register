const form = document.querySelector('form')

function addNewHouse(){
    new App().add()
    console.log('App New Data')
}

form.addEventListener('submit', addNewHouse)