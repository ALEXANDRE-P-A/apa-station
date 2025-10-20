document.querySelector("body").style.height = `${window.innerHeight}px`;

const tabElems = document.querySelectorAll(".tab");
const contentElems = document.querySelectorAll(".content");

tabElems.forEach((elem, index) => {

  elem.addEventListener("click", _ => {
    
    contentElems.forEach(elem => {
      elem.classList.add("hidden");
    });

    contentElems[index].classList.remove("hidden");
  });

});