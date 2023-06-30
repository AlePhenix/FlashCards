const createButton = document.getElementById("createCardButton");
const albumCreatorContainer = document.getElementById('albumCreatorContainer');

createButton.addEventListener('click', openAlbumCreator)

function openAlbumCreator() {
    albumCreatorContainer.innerHTML = `
        <ul id='albumCreator' class="">
            <h2 class="title-h2 title-AC">Album Creator</h2>
            <li  class='AC-inputs-container'>
                <p class="content">Nombre del album</p>
                <input class="principal-input AC-input" type="text">
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
            <button id='doneAlbumCreatorButton' class="done-button button-AC">
                <p class="content">Create</p>
            </button>
        </ul>
    `;
    var albumCreator = document.getElementById("albumCreator");

    albumCreator.classList.add('overlay-album')
    albumCreatorContainer.classList.add('overlay-bkg')
}



albumCreatorContainer.addEventListener("click", closeOverlay);

function closeOverlay(event) {
    if (event.target === albumCreatorContainer) {
        albumCreator.classList.add('move-out')
        
        setTimeout(() => {
            albumCreatorContainer.classList.remove('overlay-bkg');
            albumCreator.classList.remove('move-out')
            albumCreatorContainer.innerHTML = ``;
        }, 350);
    }
}