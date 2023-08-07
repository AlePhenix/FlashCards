const createButton = document.getElementById("createCardButton");
const albumCreatorContainer = document.getElementById('albumCreatorContainer');
const albumLibrary = document.getElementById('library');
const albumSlide = document.getElementById('AlbumSlide');


function assignEventListeners() {
    doneAlbumCreatorButton.addEventListener("click", saveAlbum);
    albumCreatorContainer.addEventListener("click", closeOverlay);
    nameAlbumInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            doneAlbumCreatorButton.click(); // Simula el clic en el botón
        }
    });
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
    
    nameAlbumInput.focus();
    albumCreatorContainer.classList.add('overlay-bkg');
    assignEventListeners();
}


function closeOverlay(event) {
    if (event.target === albumCreatorContainer) {
        closeOverlayTransition();
    }
}
function closeOverlayTransition(){
    albumCreator.classList.add('move-out'); 
    setTimeout(() => {
        albumCreatorContainer.classList.remove('overlay-bkg');
        albumCreator.classList.remove('move-out');
        albumCreatorContainer.innerHTML= '';
    }, 350);
}
function saveAlbum(){
    var counter = 0;
    var arrayCards = [];
    var wrongCards = [];
    var rightCards = [];



    function counterPlus (){
        counter++;
        const albumCounter = document.getElementById("albumCounter");
        const cardsCounter = document.getElementById("cardsCounter");
        const cardsMakerCounter = document.getElementById("cardsMakerCounter");
        albumCounter.textContent = counter;
        cardsCounter.textContent = counter;
        cardsMakerCounter.textContent = counter;
    }
    function asignCardsTemplate(){
        const flashCardsContainer = document.getElementById("FlashCardsContainer");
        flashCardsContainer.innerHTML =  `
        <div id="FlashCard" class="flashCard">
            <p id="FlashCardContent" class="title-h2">${arrayCards[0].question}</p>
            <img id="slackIcon" src="./SVG/slack.svg" alt="slack">
        </div>  
        <button id="ButtonWrong" class="WoRbutton buttonWrong">X</button>
        <button id="ButtonRight" class="WoRbutton buttonRight">V</button>
        `;
        
    //  EVENT LISTENERS

        const backArrowIcon_Album = document.getElementById("BackArrowIcon_Album");
        backArrowIcon_Album.addEventListener("click", () => {albumSlide.innerHTML = ""});


        const slackIcon = document.getElementById("slackIcon");
        const ButtonWrong = document.getElementById("ButtonWrong");
        const ButtonRight = document.getElementById("ButtonRight");
        slackIcon.addEventListener("click", getTheAnswer);
        ButtonWrong.addEventListener("click", wrongAnswer);
        ButtonRight.addEventListener("click", rightAnswer);


        let answerCounter = 0;
                    
        const FlashCard = document.getElementById("FlashCard");
        const flashCardContent = document.getElementById("FlashCardContent");

    // Funciones de las Flash Cards
        function getTheAnswer() {       
            if (answerCounter%2 == 0) {
              flashCardContent.textContent = arrayCards[0].answer;
            } else {
                flashCardContent.textContent = arrayCards[0].question;
            }
            FlashCard.classList.toggle("answer");
            answerCounter++;
        }
        function wrongAnswer(){
            FlashCard.classList.add("wrongAnswer");
            wrongCards.push(arrayCards[0]);

        }
        function rightAnswer(){
            FlashCard.classList.add("rightAnswer");
            rightCards.push(arrayCards[0]);
            console.log(rightCards);
            rightCards.push("Si funciona");
            console.log(rightCards);
        }
    }

    var nameAlbumInput_Value = nameAlbumInput.value;

    albumLibrary.insertAdjacentHTML("afterbegin", `
    <li class="album">
        <h4 id="albumName" class="title-h2">${nameAlbumInput_Value}</h4>
        <p id="albumCounter" class="albumCounter">0/${counter}</p>
    </li>
    `); 

    closeOverlayTransition();

    const album = document.querySelector(".album");
    album.addEventListener("click", openAlbum);

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
                    <img id="BackArrowIcon_Album" class="backArrowIcon icon" src="./SVG/chevron-left-gray.svg" alt="back arrow">
                    <h3 class="title-h2 titleAlbumSLide">${albumNameValue}</h3>
                    <p id="cardsCounter" class="title-h2 cardsCounter">${counter}</p>
                </div>
                <article id="FlashCardsContainer" class="flashCardsContainer">

                </article>
            </div>
            `;
            albumSlide.innerHTML = openAlbumTemplate;

            if (counter === 0 ){
                const flashCardsContainer = document.getElementById("FlashCardsContainer")
                const createFirstFCTemplate = `
                    <div id="NewFlashCardButton" class="newFlashCardButton">
                        <p class="subtitle">Crear cartas</p>
                        <img src="./SVG/pus-Icon.svg" alt="plus icon">
                    </div>
                `;
                flashCardsContainer.innerHTML = createFirstFCTemplate;
                assignEvLis();
            }
            else {
                asignCardsTemplate();
            }
    
            function goBackToMain(){
                console.log("Cerrando album");
                albumSlide.innerHTML = "";
            } 
            function createFlashCards(){
                console.log("Abriendo creador de cartas");
                const flashCardsCreatorTemlape = `
                <div id="FlashCardCreatorPage" class="flashCardCreatorPage">
                    <div class="FCCreatorHeader">
                        <img id="BackArrowIcon_CardsCreator" class="icon" src="./SVG/chevron-left-gray.svg" alt="Back Arrow">
                        <p class="title-h2">Flash Cards Creator</p>
                        <p id="cardsMakerCounter" class="cardsCounter">0</p>
                    </div>
                    <form>
                        <p>Front Part</p>
                        <input id="FrontPartInput" class="inputFCCretor frontPartInput" type="text">
                        <p>Back Part</p>
                        <input id="BackPartInput" class="inputFCCretor backPartInput" type="text">
                        <button type="button" id="CreateFlashCardsButton" class="done-button ">Guardar</button>
                    </form>
                    <span id="saveAnimation" class="">
                        <img src="./SVG/check.svg"></img>
                    </span>
                </div>`;
                albumSlide.innerHTML += flashCardsCreatorTemlape;
        
                const backArrowIcon_CardsCreator = document.getElementById("BackArrowIcon_CardsCreator");
                const FrontPartInput = document.getElementById("FrontPartInput");
                const BackPartInput = document.getElementById("BackPartInput");
                const CreateFlashCardsButton = document.getElementById("CreateFlashCardsButton");
                backArrowIcon_CardsCreator.addEventListener("click", goBackToAlbum);
                CreateFlashCardsButton.addEventListener("click", saveNewFlashCards);

                FrontPartInput.focus();

                FrontPartInput.addEventListener("keydown", function(event) {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        BackPartInput.focus();
                    }
                });

                BackPartInput.addEventListener("keydown", function(event) {
                    if (event.key === "Enter" && FrontPartInput.value.trim() !== "") {
                        event.preventDefault();
                        CreateFlashCardsButton.click(); 
                        FrontPartInput.focus(); 
                    }
                });

                CreateFlashCardsButton.addEventListener("click", function() {
                    const frontValue = FrontPartInput.value.trim();
                    const backValue = BackPartInput.value.trim();

                    if (frontValue !== "" && backValue !== "") {
                        // Realiza aquí cualquier acción que deseas cuando se hace clic en el botón
                        console.log("Botón 'Guardar' presionado con contenido en ambos campos.");
                    } else {
                        // Muestra un mensaje de error o realiza otra acción si los campos están vacíos
                        console.log("Ambos campos deben tener contenido.");
                    }
                });


                function goBackToAlbum(){
                    console.log("Go back to the album");
                    
                    const albumSlideLastChild = albumSlide.lastChild;
                    if (albumSlideLastChild) {
                        albumSlide.removeChild(albumSlideLastChild);

                        const backArrowIcon_Album = document.getElementById("BackArrowIcon_Album");
                        backArrowIcon_Album.addEventListener("click", goBackToMain);

                        if(counter === 0){
                            const newFlashCardButton = document.getElementById("NewFlashCardButton");
                            newFlashCardButton.addEventListener("click", createFlashCards);    
                        }
                    }
                }
                function saveNewFlashCards(){
                    const saveAnimation = document.getElementById("saveAnimation");
                    saveAnimation.classList.add("saveAnimation");

                    setTimeout(() => {
                        saveAnimation.classList.remove('saveAnimation');
                    }, 1700);

                    let FrontPartInputValue = FrontPartInput.value;
                    let BackPartInputValue = BackPartInput.value;
                    FrontPartInput.value = "";
                    BackPartInput.value = "";

                    arrayCards.push(
                        {
                            question: FrontPartInputValue,
                            answer: BackPartInputValue
                        }
                    );
                    
                    console.log(arrayCards);

                    asignCardsTemplate();
            
                    counterPlus();
                    
                }
            } 
        }  
        
    
    }
}


albumCreatorContainer.addEventListener("click", closeOverlay);
createButton.addEventListener('click', openAlbumCreator);