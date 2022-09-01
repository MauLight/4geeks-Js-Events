/* eslint-disable */
import "bootstrap";
import "./style.css";

const trash = document.querySelectorAll(".fa");
console.log(trash);

for (let i = 0; i < trash.length; i++) {
  console.log(trash[i]);
  trash[i].addEventListener("click", () => {
    let elem = trash[i].parentNode.parentNode;
    console.log(elem);
    elem.parentNode.removeChild(elem);
  });
}

document.querySelector("input").addEventListener("change", e => {
  let liEl = document.getElementsByTagName("ul");
  let liBorn = document.createElement("li");
  liBorn.innerHTML =
    '<span><i class="fa fa-trash"></i></span>' + " " + e.target.value;
  liEl[0].appendChild(liBorn);
  const trash = document.querySelectorAll(".fa");
  console.log(trash);

  for (let i = 0; i < trash.length; i++) {
    console.log(trash[i]);
    trash[i].addEventListener("click", () => {
      let elem = trash[i].parentNode.parentNode;
      console.log(elem);
      elem.parentNode.removeChild(elem);
    });
  }
});
