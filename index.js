const shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value.trim(); // Trim whitespace from input
  if (inputValue !== "") {
    if (!shoppingList.includes(inputValue)) {
      // Check if the item is not already in the list
      shoppingList.push(inputValue);
      localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
      renderShoppingList();
      inputFieldEl.value = "";
    } else {
      alert("This item is already in the list."); // Alert the user if the item already exists
      inputFieldEl.value = "";
    }
  } else {
    alert("Please enter a valid item."); // Alert the user if the input is empty
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
        localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
        renderShoppingList();
      });
      shoppingListEl.appendChild(newEl);
    });
  } else {
    shoppingListEl.innerHTML = "No items here... yet";
  }
}

renderShoppingList();
