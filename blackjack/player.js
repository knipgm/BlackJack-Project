import * as deck from "./deck.js"

export function Player(){
	let hand = []
    let handTotal
    let isDealer
    let chips
}

Player.prototype.log = function(){
	console.log(this.isDealer)
    console.log(this.hand)
    console.log(this.handTotal)
    console.log(this.chips)
}

Player.prototype.hasAce = function(){

}

Player.prototype.calcHandTotal = function(){
    let total =0
    for(let card in this.hand){
        total += deck.cardValue(card)
        if(total > 21){
            if(this.hasAce()){//nesting to avoid doing a search everytime
                //if ace turn face value to 1 to simplify ace logic
            }
        }
    }
    this.handTotal = total

    return this.handTotal
}


let shoe1 = new deck.Shoe()
shoe1.populate(1)
shoe1.shuffle()
shoe1.log()
console.log(deck.cardValue(shoe1.deal()))
shoe1.log()

