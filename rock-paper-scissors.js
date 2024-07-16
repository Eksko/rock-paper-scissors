let computerScore = 0
let humanScore = 0

function getComputerChoice() {
	const min = 1
	const max = 9
	const num = Math.floor(Math.random() * (max - min + 1)) + min

	let choice = ""

	switch (num) {
		case 1:
		case 2:
		case 3:
			choice = "rock"
			break
		case 4:
		case 5:
		case 6:
			choice = "paper"
			break
		case 7:
		case 8:
		case 9:
			choice = "scissors"
			break
	}
	return choice
}

function getHumanChoice() {
	return prompt("Write one: rock, paper or scissors")
}

function playRound() {
	const humanChoice = getHumanChoice().toLowerCase()
	const computerChoice = getComputerChoice()

	const rock = "rock"
	const paper = "paper"
	const scissors = "scissors"

	if (humanChoice === computerChoice) {
		console.log("Tie!")
	} else if (humanChoice === rock && computerChoice === scissors) {
		humanScore++
		console.log("You won! Rock beats scissors.")
	} else if (humanChoice === paper && computerChoice === rock) {
		humanScore++
		console.log("You won! Paper beats rock.")
	} else if (humanChoice === scissors && computerChoice === paper) {
		humanScore++
		console.log("You won! Paper beats rock.")
	} else {
		computerScore++
		console.log("Computer won!")
	}
}

function playGame() {

	for (let i = 1; i <= 5; i++) {
		console.log(`Round: ${i}!`)
		playRound()
		console.log(`${humanScore} : ${computerScore}`)
	}
}

playGame()
