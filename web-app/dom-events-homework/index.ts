// Select elements using querySelector
const addBorderBtn = document.querySelector(
  "#add-border-btn"
) as HTMLButtonElement;
const changeTextBtn = document.querySelector(
  "#change-text-btn"
) as HTMLButtonElement;
const contentSection = document.querySelector(".content") as HTMLElement;

// Add event listener when button with id "add-border-btn" is clicked
// and add border style "2px solid red" for section with class name "content"
addBorderBtn.addEventListener("click", () => {
  contentSection.style.border = "2px solid red";
});

// Add event listener when button with id "change-text-btn" is clicked
// and add color style "blue" for section with class name "content"
changeTextBtn.addEventListener("click", () => {
  contentSection.style.color = "blue";
});

// Add event listener when button with id "change-text-btn" is clicked
// and add backgroundColor style "gray" for section with class name "content"
changeTextBtn.addEventListener("click", () => {
  contentSection.style.backgroundColor = "gray";
});

//Add event listener when section element with class name "content" is hovered
// this means to use mouseover event type
// and add box-shadow style  12px 12px 2px 1px rgba(0, 0, 255, 0.2);
contentSection.addEventListener("mouseover", () => {
  contentSection.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
});
