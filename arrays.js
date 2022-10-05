// const fruits = [
// "Bananas",
// "Berry",
// "Apple",
// "Mango", 
// "Guanabana",
// ]
// //console.log("My Fruits are:", fruits)
// // console.log("The first Fruit is:", fruits[0])
// // console.log("The second Fruit is:", fruits[1])

// //return the fruit at position x from the array
// function getFruit(index) { //parameter of function is index
// return fruits[index];
// }
// console.log(`I have ${fruits.length} fruits in my list`)
// console.log(getFruit(4))//called function and commands the index 
// console.log(getFruit(3)) 
// console.log(getFruit(2)) 
// console.log(getFruit(1)) 
// console.log(getFruit(0)) 

// let playersNumber = [ 12,33,44,55,33,99]

// console.log(playersName[0]+ playersNumber[2])

let students = [
    {
        name: "Jacques",
        age: 22,

    },
    {
        name: "Ainis",
        age: 25,

    },
    {
        name: "Tyler",
        age: 22,

    },

];

// const firstStudent = students[0]

// console.log(students[1])
// console.log(firstStudent.name)

const{name,age} = students[0]
//console.log("First student's name is :", name)
//console.log(`"First student's name is ${name} and he is ${age} years old.`)

const sentence = "hello Boca Code"
//console.log(sentence.length)
//const arrayOfLetters = sentence.split("")
//console.log(arrayOfLetters)
//const arrayOfWords = sentence.split(" ")
//console.log (arrayOfWords)

//push() adding at the end 
//let fruits = ["orange", "mango", "fraise"]
// console.log(fruits)
// fruits.push ("Kiwi")
// console.log(fruits)

// //pop()taking off 
// const shoes = ["magista", "tiempo", 'hypervenom']
// shoes.pop ('hypervenom')
// console.log(shoes)

 let fruits = ["orange", "mango", "fraise"]; 
// console.log(fruits)
// fruits.push ("Kiwi")
// console.log(fruits)
// const oldFruit = fruits.pop() // Removes from the end 
// console.log(oldFruit)
// console.log(fruits)

const oldFruit2 = fruits.shift() //Removes form front 
console.log(oldFruit2) 
console.log(fruits)

fruits.unshift("Pineapple")
fruits.unshift("fig")
console.log(fruits)

fruits = ["tomatoes",...fruits, "dragon fruit"] 
// spread which is ()...fruits) operator allows add in the beginning and the end  
console.log(fruits)

console.log(`my fruits are : ${fruits.join(", ")}`)



