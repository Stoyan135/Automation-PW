// Get element by tag name
document.getElementsByTagName("h1")[0];

// Get h1 tag by CSS selector
document.querySelector("h1");

// Create DOM element
const paragraph: HTMLParagraphElement = document.createElement("p");

paragraph.textContent = "This is our created paragraph";

const addItemsContent = document.getElementsByClassName("add-items");
console.log("addItemsContent", addItemsContent);

// Append element in the HTML structure
if (addItemsContent.length > 0) {
  addItemsContent[0].append(paragraph);
}

// Remove element
const spanEl: HTMLSpanElement | null = document.querySelector("span");
if (spanEl) {
  spanEl.remove();
}

// Add event listener on keyboard press
document.addEventListener("keypress", (event: KeyboardEvent) => {
  console.log("Key pressed:", event.key);
});

// Add and remove list items

const itemInput = document.querySelector("#itemInput") as HTMLInputElement;
const addButton = document.querySelector("#addButton") as HTMLButtonElement;
const list = document.querySelector("#list") as HTMLUListElement;
// paragraph removing
paragraph.remove();

if (addButton && itemInput && list) {
  addButton.addEventListener("click", () => {
    
  });

  //function addListItem() {

    

  }

  itemInput.addEventListener("keypress", (event) => {
    if (event.key === 'Enter')
  })
}
