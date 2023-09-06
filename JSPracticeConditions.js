
// conditions are declared with 
// if(condition){}
// this "condition has two status, either True = 1 or False = 0
// evey condito contains "logic statement"
// If the condition is true, then it will go to True
// If the condition is false, then it will go to else{}
// Else doesn't require any conditn whatever is inside it, it will execute


const now = new Date();
const day = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log(day, hours + ":"+minutes + ":"+seconds);

// now Day or present day Wednesday showing is 3, that means Java Script starts date count Sunday = 0, i.e. day 0 = Sunday

if (day == 3) {

        console.log("Get offer 999 on Wednesday")
}

else {

        console.log("No 999 offer on This day")
}

if (day == 4) {

    console.log("Get offer 999 on Wednesday")
}

else {

    console.log("No 999 offer on This day")
}

// Two conditions are show as if, els. However, there can be multiple conditions shown as if, else if,else if, else if, else etc..

// == or double equal is used as a conditional opertor

// Example of multiple condition:

Total_bill = 5000

if (day == 0) {

    discount = 10
}

else if (day == 1 ) {
    
    discount = 15
}

else if (day == 2 ) {
    
    discount = 20
}

else if (day == 3 ) {
    if (hours <= 18 && hours >= 13) {
        discount = 30
    }
    else {
        discount = 25
    }
    
    // "nested condition" = a condition insiide anther condition
    // comparison operator examples less than, equal, smaller than, greater than etc.
}

else if (day == 4 ) {
    
    if (hours <= 22 && hours >= 18) {
        discount = 30
    }
    else {
        discount = 25
    }
}

else if (day == 5 ) {
    
    discount = 35
}

else {
    
    discount = 40
}

Total_discounted_bill = Total_bill - ((Total_bill * discount) / 100)

console.log("Gross Bill Amount = " + Total_bill)
console.log("Net Bill Amount = " + Total_discounted_bill)

// Logical operator AND  OR  NOT
// Mostly used AND & OR






