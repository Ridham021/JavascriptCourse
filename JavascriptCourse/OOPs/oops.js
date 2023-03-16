// Classses

class Color{

    constructor(r,g,b,name){
        this.r=r;
        this.g=g;
        this.b=b;
        this.name=name;
    }

        rgb(){
            const{r,g,b} = this;
            return `rgb(${r},${g},${b})`;
        }

        greet(){
            return this.name;
        }
    
}

const color1 = new Color(0,0,0,'black');

const color2 = new Color(10,19,32,'blue');

