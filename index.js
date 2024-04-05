const shoppingList = [];

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value.trim();
  if (inputValue !== "") {
    if (!shoppingList.includes(inputValue)) {
      shoppingList.push(inputValue);
      renderShoppingList();
      inputFieldEl.value = "";
    } else {
      alert("This item is already in the list.");
      inputFieldEl.value = "";
    }
  } else {
    alert("Please enter a valid item.");
  }
});

function renderShoppingList() {
  shoppingListEl.innerHTML = "";
  if (shoppingList.length > 0) {
    shoppingList.forEach((item, index) => {
      let newEl = document.createElement("li");
      newEl.textContent = item;
      newEl.addEventListener("click", function () {
        shoppingList.splice(index, 1);
        renderShoppingList();
      });
      shoppingListEl.appendChild(newEl);
    });
  } else {
    shoppingListEl.innerHTML = "No items here... yet";
  }
}

renderShoppingList();
