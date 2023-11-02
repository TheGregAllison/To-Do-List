
function newItem() {

  // appends to list
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  // basic input validation to prevent null input:
  if (inputValue === "") {
    alert("Please type something in the text box.");
  } else {
    let list = $("#list");
    list.append(li);
    $("#input").val("");
  }

  // Strikethrough Function:
  function strikeThrough() {
    li.toggleClass("strike");
  }
  li.on("dblclick", function strikeThrough() {
    li.toggleClass("strike");
  });

  //3(i). Adding the delete button "X": 
  let deleteButton = $("<deleteButton></deleteButton>");
  deleteButton.append(document.createTextNode('X'));
  li.append(deleteButton);
  deleteButton.on("click", deleteListItem);

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem() {
    li.addClass("delete");
  }
  // 4. Reordering the items: 
  $("#list").sortable();
};