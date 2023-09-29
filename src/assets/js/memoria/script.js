const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".time b"),
flipsTag = document.querySelector(".flips b"),
refreshBtn = document.querySelector(".details button");

let maxTime = 20;
let timeLeft = maxTime;
let flips = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;

function initTimer() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        alert("Se te acabó el tiempo. Vuelve a empezar.");
        return;
    }
    timeLeft--;
    timeTag.innerText = timeLeft;
}
function flipCard({target: clickedCard}) {
    if(!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000);
    }
    if(clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
        flips++;
        flipsTag.innerText = flips;
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) {
        matchedCard++;

        if (matchedCard == 6 && timeLeft > 0) {
            setTimeout(() => {
                alert("¡Felicidades! Has encontrado todos los pares de los ODS .");
            }, 500);
            return clearInterval(timer);
        }

        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        disableDeck = false;

        // Obtiene información aleatoria sobre un ODS
        const randomODSInfo = obtenerInformacionAleatoriaODS();

        // Muestra la alerta después de un breve retraso
        setTimeout(() => {
            alert(`Muy bien, has encontrado un par!\n\nAquí tienes información sobre un ODS:\n\n${randomODSInfo}`);
        }, 500);
    }

    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function obtenerInformacionAleatoriaODS() {
    const odsInfo = [
        "Objetivo 1: Fin de la pobreza\n\n" +
        "Meta: Erradicar la pobreza extrema y el hambre, garantizar una vida sana y una educación de calidad para todos.",
    
        "Objetivo 2: Hambre cero\n\n" +
        "Meta: Acabar con el hambre, lograr la seguridad alimentaria y una mejor nutrición, y promover la agricultura sostenible.",
    
        "Objetivo 3: Salud y bienestar\n\n" +
        "Meta: Garantizar una vida sana y promover el bienestar para todos en todas las edades.",
    
        "Objetivo 4: Educación de calidad\n\n" +
        "Meta: Garantizar una educación inclusiva, equitativa y de calidad, y promover oportunidades de aprendizaje a lo largo de la vida para todos.",
    
        "Objetivo 5: Igualdad de género\n\n" +
        "Meta: Lograr la igualdad entre los géneros y empoderar a todas las mujeres y niñas.",
    
        "Objetivo 6: Agua limpia y saneamiento\n\n" +
        "Meta: Garantizar la disponibilidad y gestión sostenible del agua y el saneamiento para todos.",
    
        "Objetivo 7: Energía asequible y no contaminante\n\n" +
        "Meta: Garantizar el acceso a una energía asequible, fiable, sostenible y moderna para todos.",
    
        "Objetivo 8: Trabajo decente y crecimiento económico\n\n" +
        "Meta: Promover el crecimiento económico sostenido, inclusivo y sostenible, el empleo pleno y productivo, y el trabajo decente para todos.",
    
        "Objetivo 9: Industria, innovación e infraestructura\n\n" +
        "Meta: Construir infraestructuras resilientes, promover la industrialización inclusiva y sostenible, y fomentar la innovación.",
    
        "Objetivo 10: Reducción de las desigualdades\n\n" +
        "Meta: Reducir la desigualdad en y entre los países y lograr la inclusión y la igualdad.",
    
        "Objetivo 11: Ciudades y comunidades sostenibles\n\n" +
        "Meta: Lograr que las ciudades y los asentamientos humanos sean inclusivos, seguros, resilientes y sostenibles.",
    
        "Objetivo 12: Producción y consumo responsables\n\n" +
        "Meta: Garantizar modalidades de consumo y producción sostenibles.",
    
        "Objetivo 13: Acción por el clima\n\n" +
        "Meta: Adoptar medidas urgentes para combatir el cambio climático y sus efectos.",
    
        "Objetivo 14: Vida submarina\n\n" +
        "Meta: Conservar y utilizar de forma sostenible los océanos, los mares y los recursos marinos para el desarrollo sostenible.",
    
        "Objetivo 15: Vida de ecosistemas terrestres\n\n" +
        "Meta: Gestionar de forma sostenible los bosques, combatir la desertificación, detener e invertir la degradación de las tierras y detener la pérdida de biodiversidad.",
    
        "Objetivo 16: Paz, justicia e instituciones sólidas\n\n" +
        "Meta: Promover sociedades pacíficas e inclusivas para el desarrollo sostenible, facilitar acceso a la justicia para todos y construir instituciones eficaces, responsables e inclusivas en todos los niveles.",
    
        "Objetivo 17: Alianzas para lograr los objetivos\n\n" +
        "Meta: Fortalecer los medios de implementación y revitalizar la Alianza Mundial para el Desarrollo Sostenible.",
];
    const randomIndex = Math.floor(Math.random() * odsInfo.length);
    return odsInfo[randomIndex];
}
function shuffleCard() {
    timeLeft = maxTime;
    flips = matchedCard = 0;
    cardOne = cardTwo = "";
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    disableDeck = isPlaying = false;

    let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        setTimeout(() => {
            imgTag.src = `assets/ods/ods-${arr[index]}.jpg`;
        }, 500);
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();

refreshBtn.addEventListener("click", shuffleCard);

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});