//let's create a multiplication table 

/* 
1 2 3 4 5 6 7 8 9 10
2 4 6 ....
.
.
.
10 20 30 40 50 60 70 80 90 100
*/ 

//STEP 1: loop i 1-100
//STEP 2 : loop j 1-10 inside i
//STEP 3: output i * j
//STEP 4: put the row together 

//let's first do one row : 
for (let i =1; i<= 10; i++){
let row = '';
for (let j = 1; j <= 10; j++){
    row += ' ' + (i * j)
}
console.log(row)
}

// for (let i = 1; i<= 10; i++){
//  //STEP 2 
//  let wholeRow = ''
//      for (let j = 1; j <=10; j++){
//        console.log(i * j)
// //STEP 3
//   wholeRow += ' ' + (i * j)  
// }
// //STEP 4
//     console.log(wholeRow)
// }