
console.log(this)
let a=10;
console.log(a);
function x(){
    let a=50;
    console.log(a);
}


const person = {
    first : "Ridham",
    last : "Shingala",
    nickName : "ridh",
    
    fullname(){
        console.log(this)
        return this;
    }
}

const person3 = {...person,div:'A'}

const person2 = person

person2.fullname();

const ans = person.fullname();


// Demo for this

const annoyer = {
    phrases : ["literlay","xyz","nfjd","dfdf","hdfjdf"],
    pickPhrases() {
        const{phrases} = this;
        const idx = Math.floor(Math.random()*phrases.length)
        return phrases[idx];
    },
    start(){
        setInterval(() => {
            console.log(this.pickPhrases())
        },3000)
    }
}

