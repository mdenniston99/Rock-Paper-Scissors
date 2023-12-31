console.log("hi");
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "scissors" ||
    userInput === "paper" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("ERROR, please type only: rock, paper or scissors.");
  }
};
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
const determineWinner = (getUserChoice, getComputerChoice) => {
  if (getUserChoice === getComputerChoice) {
    return "This game is a tie!";
  }
  if (getUserChoice === "rock") {
    if (getComputerChoice === "paper") {
      return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }

  if (getUserChoice === "paper") {
    if (getComputerChoice === "scissors") {
      return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }

  if (getUserChoice === "scissors") {
    if (getComputerChoice === "rock") {
      return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }

  if (getUserChoice === "bomb") {
    return "you win!";
  }
};
const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
