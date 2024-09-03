document.addEventListener("DOMContentLoaded",function(){
    let items = JSON.parse(localStorage.getItem("todos")) || [];
    items.forEach(function(item){
            let li = document.createElement("li");
            let textnode = document.createTextNode(item);
            let btn = createDeleteButton(item);

            li.appendChild(textnode);
            li.appendChild(btn);

            document.getElementById("list").appendChild(li);
    });
});

document.getElementById("text-input").addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        newElement();
    }
});

function newElement(){
  let li = document.createElement("li");
  let input = document.getElementById("text-input").value;
  let text_node = document.createTextNode(input);
  let btn = createDeleteButton(input);
  
  li.appendChild(text_node);
  li.appendChild(btn);
  
  document.getElementById("list").appendChild(li);
  document.getElementById("text-input").value = "";
  saveItem(input);
  
}

function saveItem(input){
    let itemsArray = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")): [];
    itemsArray.push(input)
    localStorage.setItem("todos",JSON.stringify(itemsArray));
}

function createDeleteButton(input){
    let btn = document.createElement("button");
    btn.className = "remove-button";
    btn.innerHTML = "remove";

    btn.addEventListener("click",function(){
        let li = this.parentElement;
        li.parentElement.removeChild(li);
        removeItemFromStorage(input);
        
    });

    return btn;
}

function removeItemFromStorage(input){
    let itemsArray = JSON.parse(localStorage.getItem("todos")) || [];
    itemsArray = itemsArray.filter(function(todo){
        return todo !== input;
    });
    localStorage.setItem("todos",JSON.stringify(itemsArray));
}