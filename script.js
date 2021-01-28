quizData = [
    {
        question: 'Which was the Most Popular Programming Language in 2020?',
        a: 'Python',
        b: 'JavaScript',
        c: 'Java',
        d: 'C++',
        correct: 'a'
    },
    {
        question: 'Which is the Largest State in India?',
        a: 'Maharashtra',
        b: 'Uttar Pradesh',
        c: 'West Bengal',
        d: 'Rajasthan',
        correct: 'd'
    },
    {
        question: 'Who is the President of US?',
        a: 'Hilary Clinton',
        b: 'Donald Trump',
        c: 'Joe Biden',
        d: 'Kamala Haris',
        correct: 'c'
    },
    {
        question: 'What Does JSON stands for?',
        a: 'Java Standard Object Notation',
        b: 'JavaScript Object Notation',
        c: 'JSON Object Notation',
        d: 'JavaScript Object Numericals',
        correct: 'b'
    },
    {
        question: 'What does HTML Stands for?',
        a: 'HyperText Markup Language',
        b: 'HypoText Markup Language',
        c: 'Hyper Textual based Language',
        d: 'HypoText magical Language',
        correct: 'a'
    }
]

let quiz = document.getElementById('quiz')
let answerElemenet = document.querySelectorAll('.answer');
let question = document.getElementById('question');
let a = document.getElementById('a-text');
let b = document.getElementById('b-text');
let c = document.getElementById('c-text');
let d = document.getElementById('d-text');

let submitBtn = document.getElementById('btn');

let currentQuiz = 0;
let score = 0;
getQuiz();

function getQuiz() {
    deSelectAnswer();
    question.innerText = quizData[currentQuiz].question;
    a.innerText = quizData[currentQuiz].a;
    b.innerText = quizData[currentQuiz].b;
    c.innerText = quizData[currentQuiz].c;
    d.innerText = quizData[currentQuiz].d;
}




function getAnswer() {
    let answer = undefined;
    answerElemenet.forEach((ans) => {
        if(ans.checked) {
            answer = ans.id;

        }
    });
    return answer;


}

function deSelectAnswer () {
    answerElemenet.forEach((ans) => {
        ans.checked = false;
    });
}

submitBtn.addEventListener('click', () =>{
    const answer = getAnswer();
    console.log(answer);
    if(answer) {
        if(answer===quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            getQuiz();
        }else {
            quiz.innerHTML = `
            <h2>Your Score is ${score}/${quizData.length}.</h2>

            <button onclick ="location.reload()">Reload</button>
            `;
        }
    }
});


