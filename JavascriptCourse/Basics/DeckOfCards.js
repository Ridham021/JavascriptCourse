
function makeDeck(){
    const suits = ['hearts','diamonds','spades','clubs'];
    const values = '2,3,4,5,6,7,8,9,10,A,J,K,Q';
    const deck = [];
    for(let value of values.split(',')){
        for(let suit of suits){
           deck.push({value , suit});
        }
    }
    return deck;
}


const myDeck = {
     deck : [],
     drawCards : [],
     suits : ['hearts','diamonds','spades','clubs'],
     values : '2,3,4,5,6,7,8,9,10,A,J,K,Q',
     initializeDeck() {
        const {
            suits,
            values,
            deck

        } = this;

        for(let value of values.split(',')){
            for(let suit of suits){
               deck.push({value , suit});
            }
        }        
     },

     drawCard(){
      const card =  this.deck.pop();
      this.drawCards.push(card);
      return card;
    },

    drawMultipleCards(numCards){
        const cards = [];
        for(let i=0;i<numCards;i++){
            cards.push(this.drawCard());
        }
        return cards;
    }
}

function shuffle(arr){
    for(let i=arr.length-1;i>0;i--){
        let j= Math.floor(Math.random()*(i+1));

        [arr[i],arr[j]] = [arr[j],arr[i]];
        
    }
    return arr;
}