//import the readline module 
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const chalk = require('chalk') //import the chalk library to format output

const rl = readline.createInterface({ input, output });

//make an array of objects for the trivia questions
const trivia = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: 3
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 2
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correctAnswer: 4
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["Jane Austen", "William Shakespeare", "Mark Twain", "Charles Dickens"],
        correctAnswer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: 3
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        choices: ["Gold", "Oxygen", "Osmium", "Iron"],
        correctAnswer: 2
    },
    {
        question: "Who developed the theory of relativity?",
        choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correctAnswer: 2
    },
    {
        question: "What is the hardest natural substance on Earth?",
        choices: ["Gold", "Iron", "Diamond", "Quartz"],
        correctAnswer: 3
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        choices: ["China", "Brazil", "UK", "Russia"],
        correctAnswer: 2
    },
    {
        question: "What is the boiling point of water at sea level?",
        choices: ["90°C", "100°C", "110°C", "120°C"],
        correctAnswer: 2
    },
    {
        question: "Who is known as the father of computers?",
        choices: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
        correctAnswer: 2
    },
    {
        question: "What is the smallest prime number?",
        choices: ["0", "1", "2", "3"],
        correctAnswer: 3
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: 2
    },
    {
        question: "What is the square root of 64?",
        choices: ["6", "7", "8", "9"],
        correctAnswer: 3
    },
    {
        question: "Which continent is the Sahara Desert located in?",
        choices: ["Asia", "Australia", "Africa", "South America"],
        correctAnswer: 3
    },
    {
        question: "What is the chemical symbol for sodium?",
        choices: ["Na", "S", "Sn", "So"],
        correctAnswer: 1
    }
];
//make a function called starr quiz to prompt the user whether to take the trivia or not
startQuiz()
async function startQuiz() {    
const response = await rl.question(" Welcome to trivia type 'yes' to start, 'no to quit'  ")
if(response.toLowerCase() === 'yes') {
        console.log(chalk.yellow('choose a number between 1 and 4 representing your answer'))//give user instructions
        testUser() //call the test user function
    }
    else {
        rl.close()
    }
}
//make a function to test the user
async function testUser() {
    let score = 0 // initialize the score
    for(const question of trivia) {
        console.log(chalk.blue(question.question))
        question.choices.forEach((choice, index) => console.log(`${index + 1}. ${choice}`))
        const answer = await rl.question(`Your choice: `)
        if(parseInt(answer) === question.correctAnswer) { //validate input
            score += 10
            console.log(chalk.green(`congrats, your score is now ${score}`))            
        }    
        else {
            console.log(chalk.red(`Not exactly, the correct answer is ${question.correctAnswer}`))
            console.log(`current score is ${score}`)
        }  
    }
    console.log(`Game over, your total score is ${chalk.green(score)}`)
    const response = await rl.question("Type 'yes' to start again, 'no' to end game  ")//restart logic
    if(response === 'yes') {
        startQuiz()
    }
    else {
        console.log('Goodbye')
        rl.close()
    }
}




