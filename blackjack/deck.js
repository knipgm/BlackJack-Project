const suits = ['S','C','D','H'] //spade, club, diamond, heart
const faces = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
let deck = []

for(suit in suits){
	for(face in faces){
		deck.push(faces[face]+suits[suit])
	}
}
//console.log(deck)
//a shoe in black jack is the machine holds, shuffles, and deals out multiple decks of cards
function Shoe(){
	let decks
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
	for(card in this.decks){
		//code to generate random number
		//randomCard = this.decks[random]
		//this.decks[random] = this.decks[card]
		//this.decks[card] = randomCard
	}
}


let shoe1 = new Shoe()
shoe1.populate(2)
shoe1.log()

