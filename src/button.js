const menuIcon = document.querySelector(".menu-icon");
const cruzIcon = document.querySelector(".cruz-icon");
const menuList = document.querySelector(".menu-list");
const cardsCreator = document.getElementById("cardsCreator");
const createButton = document.getElementById("createCardButton");

menuIcon.addEventListener("click", openMenu);
cruzIcon.addEventListener("click", openMenu);

createButton.addEventListener("click", openCreator);

function openMenu() {
    cruzIcon.classList.toggle("hidden");
    menuIcon.classList.toggle("hidden");
    menuList.classList.toggle("hidden");
}

function openCreator() {
    cardsCreator.innerHTML = `
        <button id="closeCardsCreator" class="close"><img class="icon" src="images/cruz.png" alt="Cruz"></button>
        <h2>Crear una nueva Flash Card</h2>
        <p>Primera parte</p>
        <input class="principal-input" type="text" id="">
        <p>Segunda parte</p>
        <input class="principal-input" type="text" id="">
        <button class="done">Listo</button>
    `;
    cardsCreator.classList.add("cards-creator");
    createButton.classList.toggle("hidden");


    const closeCardsCreator = document.getElementById("closeCardsCreator");

    closeCardsCreator.addEventListener("click", closeCreator);

}

function closeCreator() {
    cardsCreator.innerHTML = "";
    cardsCreator.classList.remove("cards-creator");
    createButton.classList.toggle("hidden");
}
