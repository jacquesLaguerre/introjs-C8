const person = {
    name: "Jacques",
    age: 22,
    address: "Thomassin 48", 
    address2: "Thomassin 48", 
    address3: "Thomassin 48", 


}
//console.log("person is called: ", person.name )
//console.log("person is called: ", person["name"] )
//console.log(`my name is ${person.name} and I'm this old: ${person.age}`)
//const name = person.name 
//const age = person.age 
const {name,age} = person
console.log(`my name is ${person.name} 
and I'm this old: ${person.age}`)


