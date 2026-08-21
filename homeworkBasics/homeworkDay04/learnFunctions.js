//Task 1: Function Declaration
//Create a function named `userProfile` that takes a `name` as a parameter and logs
 //“Hello, <name>!" to the console.
function userProfile(name){
console.log("Hello," , name, "!")
}
userProfile("Lalitha")

//Task 2: Arrow Function
//Create an arrow function named `double` that takes a number as a parameter and 
//returns double its value.

/* function double(num){
    console.log(num)
    const doubleTheNumber = num=> 2*num 
    console.log(typeof doubleTheNumber)
    console.log(doubleTheNumber)
    console.log(2*num)
}
double(9) */
const double = num=> 2*num 
console.log(double)
double(9)
//Task 3: Anonymous Function
//Use an anonymous function with `setTimeout` to log `"This message is delayed 
//by 2 seconds"` after 2 seconds.

setTimeout(function() {
  console.log("This message is delayed by 2 second");
}, 2000);
//Task 4: Callback Function
//Create a function named `getUserData` that takes a callback function as a parameter. 
//Inside `getUserData`, simulate fetching data with `setTimeout` and then call the 
//callback function with a user object after 3 seconds.Call the `getUserData`
 //function and log the user's name and age using the callback function.
 //function getUserData
 function getUserData(userdata){
    setTimeout (()=>{
        const user = { name: "Alex Jones", age: "65" };
        console.log('inside callback fun')
    },3000);
   }

 function userdata(){
    //console.log(`User name is ${name} and user age is ${age}`)
    console.log(`inside userdata`)
 }
getUserData(userdata())
