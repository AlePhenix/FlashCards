const createButton = document.getElementById("createCardButton");
const albumCreatorContainer = document.getElementById('albumCreatorContainer');
const albumLibrary = document.getElementById('library');
const albumSlide = document.getElementById('AlbumSlide');


function assignEventListeners() {
    doneAlbumCreatorButton.addEventListener("click", saveAlbum);
    albumCreatorContainer.addEventListener("click", closeOverlay);
}

function closeOverlayTransition(){
    albumCreator.classList.add('move-out'); 
    setTimeout(() => {
        albumCreatorContainer.classList.remove('overlay-bkg');
        albumCreator.classList.remove('move-out');
        albumCreatorContainer.innerHTML= '';
    }, 350);
}
function openAlbumCreator() {
    albumCreatorContainer.innerHTML = `
        <ul id='albumCreator' class="overlay-album">
            <h2 class="title-h2 title-AC">Album Creator</h2>
            <li  class='AC-inputs-container'>
                <p class="content">Nombre del album</p>
                <input id='nameAlbumInput' class="principal-input AC-input" type="text">
            </li>
            <li class='AC-inputs-container'>
                <p class="content ">Fondo del album</p>
                <ul class="select-color-continer">
                    <li class="select-color"></li>
                    <li class="select-color"></li>
                    <li class="select-color"></li>
                    <li class="select-color"></li>
                    <li class="select-color"></li>
                    <li class="select-color"></li>
                </ul>
            </li>
            <button id='doneAlbumCreatorButton' class="done-button button-AC">Create</button>
        </ul>
    `;
    const albumCreator = document.getElementById("albumCreator");
    const doneAlbumCreatorButton = document.getElementById("doneAlbumCreatorButton");
    const nameAlbumInput = document.getElementById("nameAlbumInput");
    albumCreatorContainer.classList.add('overlay-bkg');
    assignEventListeners();
}


function closeOverlay(event) {
    if (event.target === albumCreatorContainer) {
        closeOverlayTransition();
    }
}
function saveAlbum(){
    var nameAlbumInput_Value = nameAlbumInput.value;
    const newAlbumTemplate = `
        <li class="album">
            <h4 id="albumName" class="title-h2">${nameAlbumInput_Value}</h4>
            <img class="editIcon" src="SVG/edit-B.svg" alt="edit-icon">
            <p class="title-h2">0/0</p>
        </li>
    `;
    albumLibrary.innerHTML += newAlbumTemplate;

    closeOverlayTransition();

    const createButton = document.getElementById("createCardButton");
    createButton.addEventListener('click', openAlbumCreator);

    const album = document.querySelector(".album");
    album.addEventListener("click", openAlbum);
}

function openAlbum(event){
    const editIcon = document.querySelector(".editIcon");
    const albumName = document.getElementById("albumName");

    var albumNameValue = albumName.textContent;

    if(event.target !== editIcon){
        console.log("Abrindo album");

        function assignEvLis(){
            const backArrowIcon_Album = document.getElementById("BackArrowIcon_Album");
            const newFlashCardButton = document.getElementById("NewFlashCardButton");
            backArrowIcon_Album.addEventListener("click", goBackToMain);
            newFlashCardButton.addEventListener("click", createFlashCards);    
        }

        const openAlbumTemplate =`
        <div class="albumPage">
            <div class="albumSlideHeader">
                <img id="BackArrowIcon_Album" class="backArrowIcon" src="./SVG/chevron-left-gray.svg" alt="back arrow">
                <h3 class="title-h2 titleAlbumSLide">${albumNameValue}</h3>
                <p id="cardsCounter" class="title-h2 cardsCounter">0/0</p>
            </div>
            <article class="flashCardsContainer">
                <div id="NewFlashCardButton" class="newFlashCardButton">
                    <p class="subtitle">Crear cartas</p>
                    <img src="./SVG/pus-Icon.svg" alt="plus icon">
                </div>
            </article>
        </div>
        `;
        albumSlide.innerHTML = openAlbumTemplate;
        assignEvLis()

        function goBackToMain(){
            console.log("Cerrando album");
            albumSlide.innerHTML = "";
        } 
        function createFlashCards(){
            console.log("Abriendo creador de cartas");
            const flashCardsCreatorTemlape = `
            <div id="FlashCardCreatorPage" class="flashCardCreatorPage">
                <div class="FCCreatorHeader">
                    <img id="BackArrowIcon_CardsCreator" src="./SVG/chevron-left-gray.svg" alt="Back Arrow">
                    <p class="subtitle">Flash Cards Creator</p>
                    <p >0/0</p>
                </div>
                <form>
                    <p>Front Part</p>
                    <input id="FrontPartInput" class="inputFCCretor frontPartInput" type="text">
                    <p>Back Part</p>
                    <input id="BackPartInput" class="inputFCCretor backPartInput" type="text">
                    <button class="done-button ">Crear FlashCard</button>
                </form>
            </div>`;
            albumSlide.innerHTML += flashCardsCreatorTemlape;
    
            const backArrowIcon_CardsCreator = document.getElementById("BackArrowIcon_CardsCreator");
            backArrowIcon_CardsCreator.addEventListener("click", goBackToAlbum);
    
            function goBackToAlbum(){
                console.log("Go back to the album");
                
                const albumSlideLastChild = albumSlide.lastChild;
                if (albumSlideLastChild) {
                    albumSlide.removeChild(albumSlideLastChild);
                    assignEvLis();
                }
            }
        } 
    }  
    

}



albumCreatorContainer.addEventListener("click", closeOverlay);
createButton.addEventListener('click', openAlbumCreator);