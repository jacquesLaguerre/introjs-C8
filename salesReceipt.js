const subtotal = 17.24 //Define the variable
const taxRate = 0.07   //Define the variable 

function calculateSalesTax (subtotal, taxRate){
   const tax = subtotal * taxRate
    return tax 
} // Write the function calculateSalesTax and return the product
const taxTotal = calculateSalesTax(subtotal, taxRate)

const total = subtotal + taxTotal 

console.log("Subtototal  $", subtotal.toFixed(2))
console.log("tax         $", taxTotal.toFixed(2))
console.log("-----------------------------------.")
console.log ("Total       $", total.toFixed(2))




