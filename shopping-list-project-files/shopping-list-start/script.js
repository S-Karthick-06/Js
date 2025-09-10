const itemForm = document.getElementById("item-form")
const itemInput = document.getElementById("item-input")
const itemList = document.getElementById("item-list")
const clearBtn = document.getElementById("clear")


function addItem(e){
    e.preventDefault();

    if(itemInput.value === ''){
        alert('Enter item')
        return
    }
   
}

itemForm.addEventListener('submit', addItem)
