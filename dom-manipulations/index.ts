const bodyEl = document.body;
bodyEl.style.backgroundColor = "#000";
bodyEl.style.color = "#fff";
bodyEl.style.border = "2px solid red";

console.log("body background", bodyEl.style.backgroundColor);

const divEls: HTMLCollectionOf<HTMLDivElement> =
  document.getElementsByTagName("div");

const btn: HTMLButtonElement = document.getElementsByTagName("button")[0];

btn.style.backgroundColor = "green";
btn.textContent = "Abount me";

const headingsTwo: HTMLCollectionOf<HTMLHeadingElement> =
  document.getElementsByTagName("h2");

console.log("divEls", divEls);
