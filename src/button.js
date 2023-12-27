const createButton = document.getElementById("createCardButton");
const albumCreatorContainer = document.getElementById('albumCreatorContainer');
const albumLibrary = document.getElementById('library');
const albumSlide = document.getElementById('AlbumSlide');

class Album {
    constructor (name){
        this.name = name;
        this.arrayCards = [];
        this.counter = 0;
        this.actualCardCounter = 0;
        this.answerCounter = 0;
        this.wrongCardsCounter = 0;
        this.rightCardsCounter = 0;
    }
    counterPlus(){
        this.counter++;
        const albumCounter = document.getElementById("albumCounter");
        const cardsCounter = document.getElementById("cardsCounter");
        const cardsMakerCounter = document.getElementById("cardsMakerCounter");
        albumCounter.textContent = this.counter;
        cardsCounter.textContent = this.counter;
        cardsMakerCounter.textContent = this.counter;
        console.log("Si jala todo bn")
    }
    openAlbum(){
        const self = this;
        const albumName = document.getElementById("albumName");
        var albumNameValue = albumName.textContent;
        console.log("Abrindo album " + albumNameValue);

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
                    <p id="cardsMakerCounter" class="cardsCounter">${self.counter}</p>
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

            function goBackToAlbum(){
                console.log("Go back to the album");
                
                const albumSlideLastChild = albumSlide.lastChild;
                if (albumSlideLastChild) {
                    albumSlide.removeChild(albumSlideLastChild);

                    const backArrowIcon_Album = document.getElementById("BackArrowIcon_Album");
                    backArrowIcon_Album.addEventListener("click", goBackToMain);

                    if(self.counter === 0){
                        const newFlashCardButton = document.getElementById("NewFlashCardButton");
                        newFlashCardButton.addEventListener("click", createFlashCards);    
                    }else {
                        self.asignCardsTemplate()
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
                
                self.arrayCards.push(
                    {
                        question: FrontPartInputValue,
                        answer: BackPartInputValue
                    }
                );

                console.log(self.arrayCards)
        
                self.counterPlus();

                
            }
        }    

        albumSlide.innerHTML =`
        <div class="albumPage">
            <div class="albumSlideHeader">
                <img id="BackArrowIcon_Album" class="backArrowIcon icon" src="./SVG/chevron-left-gray.svg" alt="back arrow">
                <h3 class="title-h2 titleAlbumSLide">${this.name}</h3>
                <p id="cardsCounter" class="title-h2 cardsCounter">${this.counter}</p>
            </div>
            <article id="FlashCardsContainer" class="flashCardsContainer">

            </article>
        </div>
        `;
        const backArrowIcon_Album = document.getElementById("BackArrowIcon_Album");
        backArrowIcon_Album.addEventListener("click", goBackToMain);


        if (this.counter === 0 ){
            const flashCardsContainer = document.getElementById("FlashCardsContainer");
            flashCardsContainer.innerHTML = `
                <div id="NewFlashCardButton" class="newFlashCardButton">
                    <p class="subtitle">Crear cartas</p>
                    <img src="./SVG/pus-Icon.svg" alt="plus icon">
                </div>
            `;            
            const newFlashCardButton = document.getElementById("NewFlashCardButton");
            newFlashCardButton.addEventListener("click", createFlashCards);    
        }
        else if(this.counter > 0){
            this.asignCardsTemplate.bind(this)();
        } 
           
    }
    asignCardsTemplate(){
        this.actualCardCounter = 0;
        this.answerCounter = 0;
        this.wrongCardsCounter = 0;
        this.rightCardsCounter = 0;
        const self = this;
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!",this.arrayCards)
        const flashCardsContainer = document.getElementById("FlashCardsContainer");
        flashCardsContainer.innerHTML = `
        <div id="FlashCard" class="flashCard">
            <p id="FlashCardContent" class=" title-h2">${this.arrayCards[this.actualCardCounter].question}</p>
            <img id="slackIcon"  src="./SVG/slack.svg" alt="slack">
        </div> 
        <button id="ButtonWrong" class="WoRbutton buttonWrong">X</button>
        <button id="ButtonRight" class="WoRbutton buttonRight">V</button>
        `;

        const slackIcon = document.getElementById("slackIcon");
        const ButtonWrong = document.getElementById("ButtonWrong");
        const ButtonRight = document.getElementById("ButtonRight");
        slackIcon.addEventListener("click", getTheAnswer);
        ButtonWrong.addEventListener("click", wrongAnswer);
        ButtonRight.addEventListener("click", rightAnswer);
                    
        const FlashCard = document.getElementById("FlashCard");
        const flashCardContent = document.getElementById("FlashCardContent");

        // Funciones de las Flash Cards
        function nextCard (){
            self.actualCardCounter++;
            setTimeout(() => {
                if (self.actualCardCounter !== self.arrayCards.length) {
                    FlashCard.style.borderColor = "var(--gray-70)";
                    flashCardContent.textContent = self.arrayCards[self.actualCardCounter].question;
                    console.log("NEXT")
                } else{
                    setTimeout(() => {
                        self.results();
                    }, 250);
                }
            }, 500);
            if (self.answerCounter%2 == 1){
                self.answerCounter++;
                setTimeout(() => {
                    FlashCard.classList.add("flip-vertical-left");
                    FlashCard.classList.remove("flip-vertical-right");
                }, 250);
            }
        }
        function getTheAnswer() { 
            if (self.answerCounter%2 == 0) {
                flashCardContent.textContent = self.arrayCards[self.actualCardCounter].answer;
                flashCardContent.classList.add("flashCard-invert");
                flashCardContent.classList.add("flashCard-fadeIn");
                flashCardContent.addEventListener("animationend", () => {
                    flashCardContent.classList.remove("flashCard-fadeIn");
                });
                FlashCard.classList.add("flip-vertical-right");
                FlashCard.classList.remove("flip-vertical-left");
                console.log("RESPUESTA");
                self.answerCounter++;

            } else {
                flashCardContent.textContent = self.arrayCards[self.actualCardCounter].question;
                flashCardContent.classList.add("flashCard-fadeIn");
                flashCardContent.addEventListener("animationend", () => {
                    flashCardContent.classList.remove("flashCard-fadeIn");
                 });
                 FlashCard.classList.add("flip-vertical-left");
                 FlashCard.classList.remove("flip-vertical-right");
                console.log("Pregunta");
                self.answerCounter++;
            }
        }
        function wrongAnswer(){
            FlashCard.style.borderColor = "var(--red)";
            self.wrongCardsCounter++;
            console.log("MALA RES!!!")
            nextCard();
        }
        function rightAnswer(){
            FlashCard.style.borderColor = "var(--green)";
            self.rightCardsCounter++;
            console.log("buena RES!!!")
            nextCard();
        }
    }
    results() {
        const flashCardsContainer = document.getElementById("FlashCardsContainer");
        flashCardsContainer.innerHTML = `
        <div id="ResultsPage" class="resultsPage">
            <h2>Resultados</h2>
            <p class="subtitle">Cartas correctas <span>${this.rightCardsCounter}</span></p>
            <p class="subtitle">Cartas erroneas  <span>${this.wrongCardsCounter}</span></p>
            <button id="ResultadosButton" class="done-button">Volver a repasar</button>
        </div>
        `; 
        const ResultadosButton = document.getElementById("ResultadosButton");
        ResultadosButton.addEventListener("click", this.asignCardsTemplate.bind(this)); // Corrección aquí: Uso de bind para mantener el contexto de la clase
    }
}


function openAlbumCreator() {
    albumCreatorContainer.innerHTML = `
        <ul id='albumCreator' class="overlay-album">
            <h2 class="title-h2 title-AC">Album Creator</h2>
            <li  class='AC-inputs-container'>
                <p class="content">Nombre del album</p>
                <input id='nameAlbumInput' class="principal-input AC-input" type="text">
            </li>

            <button id='doneAlbumCreatorButton' class="done-button button-AC">Create</button>
        </ul>
    `;
    const albumCreator = document.getElementById("albumCreator");
    const doneAlbumCreatorButton = document.getElementById("doneAlbumCreatorButton");
    const nameAlbumInput = document.getElementById("nameAlbumInput");

    nameAlbumInput.focus();
    albumCreatorContainer.classList.add('overlay-bkg');

    doneAlbumCreatorButton.addEventListener("click", saveAlbum);
    albumCreatorContainer.addEventListener("click", closeOverlay);
    nameAlbumInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            doneAlbumCreatorButton.click(); // Simula el clic en el botón
        }
    });
}


function closeOverlayTransition(){
    albumCreator.classList.add('move-out'); 
    setTimeout(() => {
        albumCreatorContainer.classList.remove('overlay-bkg');
        albumCreator.classList.remove('move-out');
        albumCreatorContainer.innerHTML= '';
    }, 350);
}
function closeOverlay(event) {
    if (event.target === albumCreatorContainer) {
        closeOverlayTransition();
    }
}
function saveAlbum(){
    const nameAlbumInput_Value = nameAlbumInput.value;
    var myAlbum = new Album(nameAlbumInput_Value);

    albumLibrary.insertAdjacentHTML("afterbegin", `
    <li class="album">
        <h4 id="albumName" class="title-h2">${myAlbum.name}</h4>
        <p id="albumCounter" class="albumCounter">${myAlbum.counter}</p>
    </li>
    `); 

    closeOverlayTransition();


    const album = document.querySelector(".album");
    album.addEventListener("click", function() {
        myAlbum.openAlbum();
       });
}


albumCreatorContainer.addEventListener("click", closeOverlay);
createButton.addEventListener('click', openAlbumCreator);

