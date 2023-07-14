const createButton = document.getElementById("createCardButton");
const albumCreatorContainer = document.getElementById('albumCreatorContainer');
const albumLibrary = document.getElementById('library');

createButton.addEventListener('click', openAlbumCreator);


function openAlbumCreator() {


    console.log("openAlbumCreator");
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



albumCreatorContainer.addEventListener("click", closeOverlay);

function closeOverlay(event) {
    if (event.target === albumCreatorContainer) {
        albumCreator.classList.add('move-out');
        
        setTimeout(() => {
            albumCreatorContainer.classList.remove('overlay-bkg');
            albumCreator.classList.remove('move-out');
            albumCreatorContainer.innerHTML = '';
            
        }, 350);
    }
}
function saveAlbum(){
    let nameAlbumInput_Value = nameAlbumInput.value;
    var newAlbumTemplate = `
        <li class="album">
            <a href="./src/album.html"></a>
            <h4 class="title-h2">${nameAlbumInput_Value}</h4>
            <img src="SVG/edit-B.svg" alt="edit-icon">
        </li>
    `;
    albumLibrary.innerHTML += newAlbumTemplate;

    albumCreator.classList.add('move-out');
        
    setTimeout(() => {
        albumCreatorContainer.classList.remove('overlay-bkg');
        albumCreator.classList.remove('move-out');
        albumCreatorContainer.innerHTML= '';
    }, 350);
    const createButton = document.getElementById("createCardButton");

    createButton.addEventListener('click', openAlbumCreator);

}
function assignEventListeners() {
    doneAlbumCreatorButton.addEventListener("click", saveAlbum);
    albumCreatorContainer.addEventListener("click", closeOverlay);
}

