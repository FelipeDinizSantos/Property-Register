class App {

    //Add New House in List and in Ul
    add(){
        event.preventDefault()

        //Get Inputs of HTML
        let area =  document.querySelector('input[name="area"]').value
        let immobileType = document.querySelector('select').value
        let rented = document.querySelector('select[name="rented"]').value
        let list = document.getElementById('list-house')
    
        //Call the Cleaner Form
        this.clearForm()

        //Create House in Your Class
        let immobile = new House(area, immobileType, rented)

        //Add New Li in Ul 
        let li = document.createElement('li')
        let rentedTxt = document.createElement('span')

        //Create Remove Button
        let btnRemove = document.createElement('button')
        btnRemove.innerText='Remover'
        btnRemove.addEventListener('click', this.remove)   

        //Verify Rented House
        if(immobile.rented == 'Alugado'){
            rentedTxt.append('ALUGADO')
            rentedTxt.style.backgroundColor='red'
            rentedTxt.style.color='white'
        }else if(immobile.rented == 'Disponível'){
            rentedTxt.append('DISPONÍVEL')
            rentedTxt.style.backgroundColor='green'
            rentedTxt.style.color='white'
        }
         
        //Add All in Li Element
        li.append(btnRemove)
        li.append(` Área: ${area}m² | Tipo do Imóvel: ${immobileType.toUpperCase()}    `)
        li.append(rentedTxt)
    
        //Add All on Ul
        list.appendChild(li)
    }

    //Function to Remove Li on House List
    remove(){
        let liToRemove = event.target.parentNode //O botão criado é o evento principal quando clicado, o 'target' direciona para o elemento gerador do evento, logo através do 'parentNode' somos direcionados ao 'Li', elemento pai do botão clicado
        document.getElementById('list-house').removeChild(liToRemove)
    }

    //Clear Form of HTML
    clearForm(){
        let areaClear = document.querySelector('input[name="area"]').value = ''
        let immobileTypeClear = document.querySelector('select')
        immobileTypeClear.value = document.querySelector('select option').value
        let rentedClear = document.querySelector('select[name="rented"]')
        rentedClear.value = document.querySelector('select[name="rented"] option').value
    }
}