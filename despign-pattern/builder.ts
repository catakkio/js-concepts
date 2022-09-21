

class HotDog {
    constructor(
        private meat: string,
        private ketchup?: boolean,
        private mayonnaise?: boolean,
        private mustard?: boolean
    ) {
    }

    public addKetcup() {
        this.ketchup = true
        return this;
    }
    public addMayonnaise() {
        this.mayonnaise = true
        return this;
    }
    public addMustard() {
        this.mustard = true
        return this; // return this allows also method chaining
    }
}

let myLunch = new HotDog('chicken')

myLunch
    .addKetcup()
    .addMayonnaise()
    .addMustard()

console.log(myLunch);

// 'old' way of declaring and using the constructor with all the parameters
// class HotDog {
//     constructor(
//         meat:string,
//         ketchup:boolean,
//         mustard:boolean,
//         mayonase:boolean
//     ) { 
//     }
// }

// const myLunch = new HotDog('chicken', true, true, true)