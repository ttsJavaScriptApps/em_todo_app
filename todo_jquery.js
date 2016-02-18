var submitButton = $("#submit-button");
var todoList = $('.todo-item-list');
var inputText = $("#todo-input");

submitButton.on('click', function(){
  if (inputText.val() === '') {
    inputText.val("...something has to go here.");
    setTimeout(function(){inputText.val("");}, 1000);
  } else {
    $(todoList).append('<li>' + inputText.val() +'</li>');
    inputText.val("");
  }
});

$('ul').on('click', function(){
  var itemClicked = event.target;
  itemClicked.classList.add('checked-item');
  setTimeout(function(){
     itemClicked.remove();
   }, 1000);
});
