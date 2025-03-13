// Get element by tag name
document.getElementsByTagName("h1")[0];
// Get h1 tag by CSS selector
document.querySelector("h1");
// Create DOM element
var paragraph = document.createElement("p");
paragraph.textContent = "This is our created paragraph";
var addItemsContent = document.getElementsByClassName("add-items");
console.log("addItemsContent", addItemsContent);
// Append element in the HTML structure
if (addItemsContent.length > 0) {
    addItemsContent[0].append(paragraph);
}
// Remove element
var spanEl = document.querySelector("span");
if (spanEl) {
    spanEl.remove();
}
// Add event listener on keyboard press
document.addEventListener("keypress", function (event) {
    console.log("Key pressed:", event.key);
});
// Add and remove list items
var itemInput = document.querySelector("#itemInput");
var addButton = document.querySelector("#addButton");
var list = document.querySelector("#list");
// paragraph removing
paragraph.remove();
if (addButton && itemInput && list) {
    addButton.addEventListener("click", function () {
        var listItem = document.createElement("li");
        var listItemValue = itemInput.value.trim();
        if (listItemValue) {
            // Add input as list item text
            listItem.textContent = listItemValue;
            // Display list item on the screen
            list.append(listItem);
            // Clear input value after adding it to the list
            itemInput.value = "";
            itemInput.focus();
            var deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            listItem.append(deleteBtn);
            deleteBtn.style.margin = "5px";
            deleteBtn.addEventListener("click", function () {
                listItem.remove();
            });
        }
    });
}
