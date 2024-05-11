const createButton = document.getElementById("createCardButton");
const albumCreatorContainer = document.getElementById('albumCreatorContainer');
const albumLibrary = document.getElementById('library');
const albumSlide = document.getElementById('AlbumSlide');

// Lista de vervos a usar como ejemplo 
const listVerbs = [
    { question: 'be', answer: 'ser/estar' },
    { question: 'have', answer: 'tener' },
    { question: 'do', answer: 'hacer' },
    { question: 'say', answer: 'decir' },
    { question: 'get', answer: 'obtener' },
    { question: 'make', answer: 'hacer' },
    { question: 'go', answer: 'ir' },
    { question: 'know', answer: 'saber/conocer' },
    { question: 'take', answer: 'tomar' },
    { question: 'see', answer: 'ver' },
    { question: 'come', answer: 'venir' },
    { question: 'think', answer: 'pensar' },
    { question: 'look', answer: 'mirar' },
    { question: 'want', answer: 'querer' },
    { question: 'give', answer: 'dar' },
    { question: 'use', answer: 'usar' },
    { question: 'find', answer: 'encontrar' },
    { question: 'tell', answer: 'decir/informar' },
    { question: 'ask', answer: 'preguntar' },
    { question: 'work', answer: 'trabajar' },
    { question: 'seem', answer: 'parecer' },
    { question: 'try', answer: 'intentar' },
    { question: 'leave', answer: 'salir/dejar' },
    { question: 'call', answer: 'llamar' },
    { question: 'need', answer: 'necesitar' },
    { question: 'try', answer: 'intentar' },
    { question: 'ask', answer: 'preguntar' },
    { question: 'tell', answer: 'decir/informar' },
    { question: 'become', answer: 'volverse/llegar a ser' },
    { question: 'show', answer: 'mostrar' },
    { question: 'play', answer: 'jugar/tocar' },
    { question: 'move', answer: 'moverse' },
    { question: 'like', answer: 'gustar' },
    { question: 'help', answer: 'ayudar' },
    { question: 'put', answer: 'poner' },
    { question: 'take', answer: 'tomar' },
    { question: 'follow', answer: 'seguir' },
    { question: 'change', answer: 'cambiar' },
    { question: 'believe', answer: 'creer' },
    { question: 'watch', answer: 'mirar/ver' },
    { question: 'try', answer: 'intentar' },
    { question: 'talk', answer: 'hablar' },
    { question: 'turn', answer: 'girar' },
    { question: 'start', answer: 'comenzar' },
    { question: 'show', answer: 'mostrar' },
    { question: 'hear', answer: 'oír' },
    { question: 'play', answer: 'jugar/tocar' },
    { question: 'run', answer: 'correr' },
    { question: 'move', answer: 'moverse' },
    { question: 'like', answer: 'gustar' },
]

const listPlaces = [
    { question: 'Home', answer: 'Hogar' },
    { question: 'School', answer: 'Escuela' },
    { question: 'Park', answer: 'Parque' },
    { question: 'Hospital', answer: 'Hospital' },
    { question: 'Restaurant', answer: 'Restaurante' },
    { question: 'Library', answer: 'Biblioteca' },
    { question: 'Beach', answer: 'Playa' },
    { question: 'Office', answer: 'Oficina' },
    { question: 'Store', answer: 'Tienda' },
    { question: 'Gym', answer: 'Gimnasio' },
    { question: 'Church', answer: 'Iglesia' },
    { question: 'Airport', answer: 'Aeropuerto' },
    { question: 'Hotel', answer: 'Hotel' },
    { question: 'Stadium', answer: 'Estadio' },
    { question: 'Museum', answer: 'Museo' },
    { question: 'Cinema', answer: 'Cine' },
    { question: 'Bank', answer: 'Banco' },
    { question: 'Zoo', answer: 'Zoológico' },
    { question: 'Cafe', answer: 'Café' },
    { question: 'Farm', answer: 'Granja' },
    { question: 'Post Office', answer: 'Oficina de correos' },
    { question: 'Theater', answer: 'Teatro' },
    { question: 'Supermarket', answer: 'Supermercado' },
    { question: 'Mall', answer: 'Centro comercial' },
    { question: 'College', answer: 'Universidad' },
    { question: 'Stadium', answer: 'Estadio' },
    { question: 'Bar', answer: 'Bar' },
    { question: 'Mosque', answer: 'Mezquita' },
    { question: 'Synagogue', answer: 'Sinagoga' },
    { question: 'Gas Station', answer: 'Gasolinera' },
    { question: 'Beach', answer: 'Playa' },
    { question: 'River', answer: 'Río' },
    { question: 'Lake', answer: 'Lago' },
    { question: 'Mountain', answer: 'Montaña' },
    { question: 'Hill', answer: 'Colina' },
    { question: 'Forest', answer: 'Bosque' },
    { question: 'Desert', answer: 'Desierto' },
    { question: 'Island', answer: 'Isla' },
    { question: 'City', answer: 'Ciudad' },
    { question: 'Town', answer: 'Pueblo' },
    { question: 'Village', answer: 'Aldea' },
    { question: 'Street', answer: 'Calle' },
    { question: 'Square', answer: 'Plaza' },
    { question: 'Bridge', answer: 'Puente' },
    { question: 'Subway', answer: 'Metro' },
    { question: 'Bus Stop', answer: 'Parada de autobús' },
    { question: 'Train Station', answer: 'Estación de tren' },
    { question: 'Port', answer: 'Puerto' },
    { question: 'Garden', answer: 'Jardín' },
    { question: 'Playground', answer: 'Parque infantil' }
];


// Clase constructora del Album
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

    UNAM_Verbs (){
        function seleccionarCartasAleatorias(list){
            if (list.length < 12) {
                console.log("La lista debe contener al menos 12 números.");
                return [];
            }   
            let numerosSeleccionados = [];
            
            while (numerosSeleccionados.length < 12) {
                let numeroAleatorio = Math.floor(Math.random() * list.length);
                if (!numerosSeleccionados.includes(list[numeroAleatorio])) {
                    numerosSeleccionados.push(list[numeroAleatorio]);
                }
            }
            
            return numerosSeleccionados;
        }

        this.arrayCards = seleccionarCartasAleatorias(listVerbs);

        this.counter = this.arrayCards.length;

        this.openAlbum();
    }
    UNAM_Places (){
        function seleccionarCartasAleatorias(list){
            if (list.length < 12) {
                console.log("La lista debe contener al menos 12 números.");
                return [];
            }   
            let numerosSeleccionados = [];
            
            while (numerosSeleccionados.length < 12) {
                let numeroAleatorio = Math.floor(Math.random() * list.length);
                if (!numerosSeleccionados.includes(list[numeroAleatorio])) {
                    numerosSeleccionados.push(list[numeroAleatorio]);
                }
            }
            
            return numerosSeleccionados;
        }

        this.arrayCards = seleccionarCartasAleatorias(listPlaces);

        this.counter = this.arrayCards.length;

        this.openAlbum();
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
    // En esta parte se agregan las cartas en la pantalla del usuario
    //

    
 
 
 
 
 
 
 
 
    asignCardsTemplate(){
        this.actualCardCounter = 0;
        this.answerCounter = 0;
        this.wrongCardsCounter = 0;
        this.rightCardsCounter = 0;
        const self = this;

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
            // tenemos que hacer una lista 
            // primero vamos a pedir el numero de cartas que tiene el album
            //luego, escogemos un numero aleatorio del 0 a N
            //cada vez que cambiemos de carta NextCard() agregamos el numero actual a una lista 
            // escogemos otro numero aleatorio que no este dentro de la lista
            // asi hasta que ya no quede lleguemos a 12 numeros
            //si hay mas no importa, terminamos allí
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
        ResultadosButton.addEventListener("click", () => {
            this.arrayCards = [];
            this.UNAM_Verbs()();
            this.asignCardsTemplate.bind(this)();


        });

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




// Agregamos el Album predeterminado de los verbos en ingles
var Verbs_UNAM_Album = new Album("Verbs");
var Places_UNAM_Album = new Album("Places");

albumLibrary.insertAdjacentHTML("afterbegin", `
<li class="album album_UNAM">
    <h4 id="albumName" class="title-h2 Verbs_UNAM">Verbs</h4>
    <img src="./images/menu-hamburguesa.png" alt="" onclick='openAlbumMenu()' class='menuAlbum'>
    <ul id="albumMenuOverlay" class="none">
        <li>    
            <p>random card</p>
        </li>
        <li>
            <p>reordenar cartas</p>
        </li>
        <li>
            <p>dificultad</p>
            <ul>
                <li>facil</li>
                <li>media</li>
                <li>dificil</li>
            </ul>
        </li>
        <li>
            <button>Guardar Cambios</button>
        </li>
    </ul>
</li>
<li class="Places_UNAM album album_UNAM">
    <h4 id="albumName" class="title-h2">Places</h4>
    <img src="./images/menu-hamburguesa.png" alt="" onclick='openAlbumMenu()' class='menuAlbum'>
</li>
`); 

const Verbs_UNAM = document.querySelector(".Verbs_UNAM");
Verbs_UNAM.addEventListener("click", function() {
    Verbs_UNAM_Album.UNAM_Verbs();
});


const Places_UNAM = document.querySelector(".Places_UNAM");
Places_UNAM.addEventListener("click", function() {
    // cambiamos esta parte y generamos una para los lugares
    Places_UNAM_Album.UNAM_Places();
});


const album_Menu_Overlay = document.getElementById("albumMenuOverlay");
const album= document.querySelectorAll(".album")
function openAlbumMenu(){
    album_Menu_Overlay.classList.toggle("none")
    album[0].classList.toggle("album_menu")
    console.log("Se escucha")
}

// Agregar un apartado de edición de album
// -Poder acomodar las flashcards
// -seleccionar el tipo de orden de las Cartas LINEAL o RANDOM
// 
// -Color del album

// seccionar las flashcards en grupos de 15 a 20 cartas para que la informacion sea mas digerible
//Que las cartas aparescan con un orden RANDOM



//intentar implementar imagenes


// Otra opcion seria no tener el menú y solo hacer funcional la app
