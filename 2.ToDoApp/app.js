document.getElementById("submit").addEventListener("click", addItemToList);

function addItemToList(event) {
  event.preventDefault();
  let userInput = document.getElementById("item");

  if (userInput) {
    let item = userInput.value;
    userInput.value = "";

    let todoElement = document.getElementById("todos");

    let listElement = document.createElement("li");

    let spanElement = document.createElement("span");

    spanElement.innerText = "  " + item + "  ";

    listElement.append(spanElement);

    let completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    const uniqueId1 = `para-${Date.now()}`;
    completeButton.id = uniqueId1;
    completeButton.addEventListener("click", completeItem);
    listElement.append(completeButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    const uniqueId = `para-${Date.now()}`;
    deleteButton.id = uniqueId;
    deleteButton.addEventListener("click", removeItem);

    listElement.append(deleteButton);

    todoElement.appendChild(listElement);
  }
}

function completeItem(event) {
  let itemId = event.target.id;
  document
    .getElementById(itemId)
    .parentElement.getElementsByTagName("span")[0].style.textDecoration =
    "line-through";
}
function removeItem(event) {
  let itemId = event.target.id;
  document.getElementById(itemId).parentElement.remove();
}
