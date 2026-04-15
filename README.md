# CLI Trivia Game

A simple and interactive command-line trivia game built with Node.js. Test your general knowledge across different topics and track your score as you play!

---

## Features

* Interactive CLI experience using Node.js
* Multiple-choice trivia questions
* Real-time score tracking
* Colored terminal output using `chalk`
* Option to restart the game after completion

---

## Technologies Used

* **Node.js**
* **readline/promises** (for async user input)
* **chalk** (for styled console output)

---

##  Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/cli-trivia.git
   ```

2. Navigate into the project folder:

   ```bash
   cd cli-trivia
   ```

3. Install dependencies:

   ```bash
   npm install chalk
   ```

---

## How to Run

Run the application using:

```bash
node index.js
```

---

##  How to Play

1. Start the game by typing `yes` when prompted.
2. Each question has 4 choices.
3. Enter a number between **1 and 4** to select your answer.
4. You earn **10 points** for every correct answer.
5. At the end of the quiz, your total score will be displayed.
6. You can choose to restart or exit the game.

---

## Known Issues
* Input validation is minimal (non-numeric input may cause issues).

---

## Improvements to Consider

* Add input validation
* Shuffle questions for randomness
* Add difficulty levels

---

##  Author

Darrel
