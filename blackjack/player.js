import * as deck from "./deck.js"






let shoe1 = new deck.Shoe()
shoe1.populate(1)
shoe1.shuffle()
shoe1.log()
console.log(deck.cardValue(shoe1.deal()))
shoe1.log()

