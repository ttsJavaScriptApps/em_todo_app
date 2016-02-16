var submitButton = document.querySelector('#submit-button');
var todoList = document.querySelector('.todo-item-list');
var inputText = document.querySelector("#todo-input");
var itemTotal = 0;


submitButton.addEventListener('click',function(){
  itemTotal++;

  //append item to bottom of list
  //assign item unique id
  var todoItem = inputText.value;
  var newItem = document.createElement('li');
  newItem.id = 'item-' + itemTotal;
  newItem.innerHTML = todoItem;

  //append checkbox to new item
  //assign checkbox unique id
  var checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = 'checkbox-' + itemTotal;
  checkBox.onclick = removeItem;

  //verify that input value isnt blank
  if (todoItem === ''){
    //do nothing
  } else {
    newItem.appendChild(checkBox);
    todoList.appendChild(newItem);
  }

  //clear input text
  inputText.value = '';
});


function removeItem(){
  var checkBoxId = this.id.replace("checkbox-", "");
  var itemChecked = document.querySelector("#item-" + checkBoxId);
  //adding strikethrough and removing item after 3 seconds
  itemChecked.classList.add('checked-item');
  setTimeout(function(){
     itemChecked.remove();
   }, 1000);
}
