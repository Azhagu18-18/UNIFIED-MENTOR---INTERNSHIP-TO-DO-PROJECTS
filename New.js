

var inputData = document.getElementById("inputData");
var list = document.getElementById("list");

function add() {

   var listItem = document.createElement("li");
   listItem.innerHTML = inputData.value +"<button onclick ='del(event)'>DELETE</button>" ;
   list.append(listItem);
   
}

function del(event){
 
   event.target.parentElement.remove();

}