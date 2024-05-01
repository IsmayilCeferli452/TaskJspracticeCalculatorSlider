

let submitButton = document.querySelector(".button-container .submit-button");

// submitButton.addEventListener("click", function(){
//     alert("salam");
// })

let modalContainer = document.querySelector(".modal-container");

let exitButton = document.querySelector(".modal-container .modal button");

submitButton.addEventListener("click", function(){
    modalContainer.style.opacity = "0.96";
    modalContainer.style.pointerEvents = "auto";
})

exitButton.addEventListener("click", function(){
    modalContainer.style.opacity = "0";
    modalContainer.style.pointerEvents = "none";
})