const suits = ['S','C','D','H'] //spade, club, diamond, heart
const faces = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
let deck = []

for(let suit in suits){
	for(let face in faces){
		deck.push(faces[face]+suits[suit])
	}
}

//a shoe in black jack is the machine holds, shuffles, and deals out multiple decks of cards
export function Shoe(){
	let decks = []
}

Shoe.prototype.populate = function(n){
	this.decks = []
	for(let i=0;i<n;i++){
		this.decks = this.decks.concat(deck)	
	}
}

Shoe.prototype.log = function(){
	console.log(this.decks)
}

Shoe.prototype.shuffle = function(){
	for(let card in this.decks){
		let rand = Math.floor(Math.random() * this.decks.length);
		let randomCard = this.decks[rand]
		this.decks[rand] = this.decks[card]
		this.decks[card] = randomCard
	}
}

Shoe.prototype.deal = function(){
	return this.decks.pop()
}

// card functions

//handle ace as 11, logic to handle if ace should be 1 will be dealt with in the hand counter
export function cardValue(card){
	let face = card.charAt(0)

	//probably turn this into a switch statement
	if((/[0-9]/).test(face)){//if number
		return parseInt(face)
	}
	else if(face == 'A'){
		return 11
	}
	else{
		return 10
	}
}


let shoe1 = new Shoe()
shoe1.populate(1)
shoe1.shuffle()
shoe1.log()
console.log(cardValue(shoe1.deal()))
shoe1.log()


