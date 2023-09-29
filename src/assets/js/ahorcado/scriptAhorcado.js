if (typeof wordContainer === 'undefined') {
    var wordContainer = document.getElementById('wordContainer');; // Aquí defines la variable wordContainer
  }
if (typeof startButton === 'undefined') {
    var startButton = document.getElementById('startButton');; // Aquí defines la variable wordContainer
}

if (typeof usedLettersElement === 'undefined') {
    var usedLettersElement = document.getElementById('usedLetters');; // Aquí defines la variable wordContainer
}

const questionsAndAnswers = [
    {
        question: '¿Qué objetivo busca combatir?',
        answer: 'Lucha contra la pobreza',
    },
    {
        question: '¿Cuál es el objetivo relacionado con la salud?',
        answer: 'Vida saludable para todos',
    },
    {
        question: '¿Cuál es el objetivo relacionado con la educación?',
        answer: 'Educación para todos',
    },
    {
        question: '¿Qué objetivo está relacionado con el agua y el saneamiento?',
        answer: 'Agua limpia y saneamiento',
    },
    {
        question: '¿Qué objetivo promueve un consumo consciente?',
        answer: 'Consumo responsable',
    },
    {
        question: '¿Qué objetivo se enfoca en combatir el cambio climático?',
        answer: 'Acción contra el cambio climático',
    },
    {
        question: '¿Cuál es el objetivo relacionado con los ecosistemas terrestres?',
        answer: 'Ecosistemas terrestres',
    },
    {
        question: '¿Cuál es el objetivo relacionado con los ecosistemas submarinos?',
        answer: 'Vida submarina',
    },
    {
        question: '¿Qué objetivo promueve la igualdad entre hombres y mujeres?',
        answer: 'Igualdad de género',
    },
    {
        question: '¿Cuál es el objetivo relacionado con la paz y la inclusión?',
        answer: 'Paz e inclusión',
    },
];

let selectedQuestion;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.canvas.width  = 0;
ctx.canvas.height = 0;

const bodyParts = [
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
];

let selectedWord;
let usedLetters;
let mistakes;
let hits;

const showWinPopup = () => {
    alert('¡Ganaste! ¡Adivinaste la palabra correctamente!');
};

const addLetter = letter => {
    const letterElement = document.createElement('span');
    letterElement.innerHTML = letter.toUpperCase() + ' ';
    document.getElementById('attempts').appendChild(letterElement);
};

const addBodyPart = bodyPart => {
    ctx.fillStyle = '#fff';
    ctx.fillRect(...bodyPart);
};

const wrongLetter = () => {
    addBodyPart(bodyParts[mistakes]);
    mistakes++;
    if(mistakes === bodyParts.length) endGame();
};

const endGame = () => {
    document.removeEventListener('keydown', letterEvent);
    startButton.style.display = 'block';
};

const correctLetter = letter => {
    const { children } =  wordContainer;
    let allLettersGuessed = true;

    for(let i = 0; i < children.length; i++) {
        if (children[i].innerHTML === '_ ' && selectedWord[i] === letter) {
            children[i].innerHTML = letter.toUpperCase() + ' ';
            hits++;
        }

        if (children[i].innerHTML === '_ ') {
            allLettersGuessed = false;
        }
    }

    if (allLettersGuessed) {
        endGame();
        showWinPopup();
    }
};

const letterInput = letter => {
    if (selectedWord.includes(letter)) {
        correctLetter(letter);
    } else {
        wrongLetter();
    }
    addLetter(letter);
    usedLetters.push(letter);
};

const letterEvent = event => {
    let newLetter = event.key.toUpperCase();
    if (newLetter.match(/^[a-zñ]$/i) && !usedLetters.includes(newLetter)) {
        letterInput(newLetter);
    }
};

const drawWord = () => {
    selectedWord.forEach(letter => {
        const letterElement = document.createElement('span');
        if (letter === ' ') {
            // Si es un espacio, solo muestra un espacio sin la línea
            letterElement.innerHTML = '&nbsp;';
        } else {
            // Si es una letra, muestra la línea y oculta la letra
            letterElement.innerHTML = '_ ';
            letterElement.classList.add('letter');
            letterElement.classList.add('hidden');
        }
        wordContainer.appendChild(letterElement);
    });
};

const selectRandomWord = question => {
    const questionObj = questionsAndAnswers.find(q => q.question === question);
    selectedQuestion = questionObj.question;
    const answer = questionObj.answer.toUpperCase();
    selectedWord = answer.split('');
};

const drawHangMan = () => {
    ctx.canvas.width  = 120;
    ctx.canvas.height = 160;
    ctx.scale(20, 20);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#d95d39';
    ctx.fillRect(0, 7, 4, 1);
    ctx.fillRect(1, 0, 1, 8);
    ctx.fillRect(2, 0, 3, 1);
    ctx.fillRect(4, 1, 1, 1);
};

const startGame = () => {
    usedLetters = [];
    mistakes = 0;
    hits = 0;
    wordContainer.innerHTML = '';
    usedLettersElement.innerHTML = '';
    // Limpiar el contenedor de la pregunta antes de mostrar una nueva
    document.getElementById('questionContainer').innerHTML = '';
    startButton.style.display = 'none';
    drawHangMan();
    const randomIndex = Math.floor(Math.random() * questionsAndAnswers.length);
    const randomQuestion = questionsAndAnswers[randomIndex];
    const question = randomQuestion.question;
    selectRandomWord(question);
    drawWord();
    // Mostrar la pregunta
    document.getElementById('questionContainer').innerText = `Pregunta: ${question}`;
    document.addEventListener('keydown', letterEvent);
};

startButton.addEventListener('click', startGame);
