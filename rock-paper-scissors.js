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
