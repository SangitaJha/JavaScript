// Primitive


// 7 types : String, Number, Boolean,BigInt , null, undefined

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34564357878787897987n


// Reference(Non Primitive)

// Array, Objects, Functions

const heros = ["shantiman", "naagraj", "doga"]

let myObj = {
    name: "Sangita",
    age: 22,
}

const myFunction = function(){
    console.log("Hello");


}

console.log(typeof myFunction);

console.log(typeof bigNumber);


// Stack(Primitive), Heap(Non-Primitive)

let myYouTube = "Sangita"

let anothername = myYouTube
anothername = "chaiaurcode"

console.log(anothername);
