// let answer = 1;
// // def adder1()
// // num1 + num2;
// // end
// // function declaration
// function adder1(num1, num2) {
//   return num1 + num2;
// }
// //function expression
// const adder2 = function (num1, num2) {
//   return num1 + num2;
// };
// // arrow functions
// const adder3 = (num1, num2) => {
//   return num1 + num2;
// };
// const adder4 = (num1, num2) => {
//   // function is called
//   return adder2(num1, num2);
// };
// const adder5 = () => {
//   // function is not called
//   return adder2;
// };
// let x = adder5();
// console.log(x(1, 1));
// function testAdder() {
//   let result = adder1(1, 1);
//   if (result !== 2) {
//     console.log("adder1 failed should equal 2");
//     return;
//   }
//   result = adder2(1, 1);
//   if (result !== 2) {
//     console.log("adder2 failed should equal 2");
//     return;
//   }
//   result = adder3(1, 1);
//   if (result !== 2) {
//     console.log("adder3 failed should equal 2");
//     return;
//   }
//   result = adder4(1, 1);
//   if (result !== 2) {
//     console.log("adder4 failed should equal 2");
//     return;
//   }
//   console.log("test successful");
// }
// testAdder();
// let answer = 1;
// const INVALID_INPUT_ERROR_MESSAGE = "Invalid nput";
// // function declaration
// function adder1(num1, num2) {
//   if (typeof num1 !== "number" || typeof num2 !== "number") {
//     return INVALID_INPUT_ERROR_MESSAGE;
//   }
//   return num1 + num2;
// }
// function testAdder() {
//   let result = adder1(1, 1);
//   if (result !== 2) {
//     console.log("adder1 failed should equal 2");
//     return;
//   }
//   result = adder1("1", 1);
//   if (result !== INVALID_INPUT_ERROR_MESSAGE) {
//     console.log(result);
//     console.log(typeof result);
//     console.log("adder1 failed should equal 2");
//     return;
//   }
//   console.log("test passed");
// }
// testAdder();
// 0.√
// Write a function called dividez that takes two numbers and returns the result of division 
// dividez(4,2) => 2
// 1.√
// Write a function named reverseString that takes a string and reverses it.
// ie reverseString('yoyo') => 'oyoy'
// 2.
// Write a function named arrayToString that takes an array of strings and returns one string with all values from array combined with '-'.
// ie arrayToString(['yo','my','yoyo']) => 'yo-my-yoyo'
// 3.
// Write a function named sumArray that takes an array of numbers and returns the sum.
// ie sumArray([1,2,3]) => 6
// 4.
// Write a function named removeItemFromArray that takes an array of anytype and a index and removes the item of a given index and returns new array. This one is up to you to think about how to handle invalid input.  discuss this with your partner first
// ie removeItemFromArray([1,'2' ,'hello'], 2) => [1, '2']
//--------------------------------------------------------------
// Write a function called dividez that takes two numbers and returns the result of division 
// dividez(4,2) => 2
//--------------------------------------------------------------
//0
// function dividez(num1, num2){
//   return num1 / num2;
// }
// function test(){
//   let result = dividez(4,2);
//   if (result !== 2){
//     console.log("dividez failed")
//     return;
//   }
//   console.log("Successful")
//   console.log(result)
  
// }
// test()
//--------------------------------------------------------------
// Write a function named reverseString that takes a string and reverses it.
// ie reverseString('yoyo') => 'oyoy'
//--------------------------------------------------------------
//1
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// // "yoyo"
// // .split = "y" "o" "y" "o"
// // .reverse = "o" "y" "o" "y"
// // .join = "oyoy"
// function test(){
//   let result = reverseString("yoyo");
//   if (result !== "oyoy"){
//     console.log("reverse failed")
//     return;
//   }
//   console.log("Successful")
//   console.log(result)
  
// }
// test()
//--------------------------------------------------------------
// Write a function named arrayToString that takes an array of strings and returns one string with all values from array combined with '-'.
// ie arrayToString(['yo','my','yoyo']) => 'yo-my-yoyo'
//--------------------------------------------------------------
//2
// function arrayToString(str) {
//     return str.join("-");
// }
// function test(){
//   let result = arrayToString(["yo", "my", "yoyo"]);
//   if (result !== "yo-my-yoyo"){
//     console.log("reverse failed")
//     console.log(result)
//     return;
//   }
//   console.log("Successful")
//   console.log(result)
  
// }
// test()
//--------------------------------------------------------------
// Write a function named sumArray that takes an array of numbers and returns the sum.
// ie sumArray([1,2,3]) => 6
//--------------------------------------------------------------
//3

// function sumArray(num){
  //     let total = 0;
  //     for(var i = 0; i < num.length; i++){
    //        total += i
    //     }
    //    return total;
    //   }
    // sumArray = function(arr){
      //   return arr.reduce(function(a,b){
        //     return a + b
        //   }, 0);
        // }
        

       // The function that we pass as the first parameter of the reduce method receives two parameters, a and b. 
       // In this code, a is our accumulator. It will accumulate our sum as our function works. 
       // b is the current value being processed.
        
// const sumArray = arr => arr.reduce((a,b) => a + b, 0)

//   function test(){
//     let result = sumArray([5, 2, 3, 100]);
//     if (result !== 110){
//       console.log("sum failed")
//     console.log(result)
//       return;
//     }
//     console.log("Successful")
//     console.log(result)
    
//   }
//   test()
  //--------------------------------------------------------------
  // Write a function named removeItemFromArray that takes an array of anytype and a index and 
  // removes the item of a given index and returns new array. This one is up to you to think about how to handle invalid input.  
  // discuss this with your partner first
  // ie removeItemFromArray([1,'2' ,'hello'], 2) => [1, '2']

//   pop - Removes from the End of an Array
// shift - Removes from the beginning of an Array
// splice - removes from a specific Array index
// filter - allows you to programatically remove elements from an Array
// https://love2dev.com/blog/javascript-remove-from-array/
  //--------------------------------------------------------------
  //4

//   var arr = ["one", "two", "three", "four", "five"];
//   for( var i = 0; i < arr.length; i++){ 

//     if ( arr[i] === "two") { arr.splice(i,2); }

//   }
//   //=> [1, 2, 3, 4, 6, 7, 8, 9, 0]

// console.log(arr)







//   function removeItemFromArray(str) {
//   return str.splice(0,2)
//   }

// function test(){
//   let result = removeItemFromArray(["Hello", "World"]);
//   if (result !== 'Hello'){
//     console.log("reverse failed")
//     console.log(result)
//     return;
//   }
//   console.log("Successful")
//   console.log(result)
  
// }
// test()




  //--------------------------------------------------------------
  // Write a function numToWord that takes a single number and returns the number as the word (only needs to work for 0-9)
  // numToWord(0) => 'zero'
  //--------------------------------------------------------------
  // 5.
   
    // let numToWord = '1, 2, 3, 4, 5, 6, 7, 8, 9'
    // let newString = numToWord.replace('9', 'four')
    // console.log(newString)

  //--------------------------------------------------------------
  //--------------------------------------------------------------
  // write a function wordCount that takes a string a returns the number of words
  // wordCount('there are four in') => 4
  //--------------------------------------------------------------
  // 6.
  // function wordCount(str) { 
  //   return str.split(" ").length;
  // }
  // // str = wordCount("whatever is in here")
  // //taking the str and saying split it with str.split (" ") [because there is a space inside the split() it will split the information at every space]
  
  // console.log(wordCount("we live in a beautiful world"));

  

  //--------------------------------------------------------------
  //--------------------------------------------------------------
  // write a function fullName that takes in a object with first_name and last_name and returns the full name as string
  // fullName({first_name:'karate',last_name:'kid'}) => 'karate kid'
  //--------------------------------------------------------------
  // 7. 

  //The prototype object is special type of enumerable object to which additional properties can be attached 
  //to it which will be shared across all the instances of it's constructor function. 
  //So, use prototype property of a function in the above example in order to have age properties across all 
  //the objects as shown below.


// obj = {first_name:'',last_name:''}
function fullName(obj){
  return `${obj.first_name} ${obj.last_name}` 
}

persons = [
  {first_name:'James', last_name:'yeates'},
  {first_name:'James', last_name:'yeates'},
  {first_name:'James', last_name:'yeates'},
]
persons.forEach( (person) => {
  personFullName = fullName(person)
  if(personFullName !== `${person.first_name} ${person.last_name}`) {
    console.log('error')
  }
})

fullName(1)
fullName({first_name:{sdfsd:'sdf'}})




  // function Person(){

  // }
  
  // Person.prototype.first_name=function(){
  //   return "karate"
  // }
  
  // Person.prototype.last_name=function(){
  //   return "kid"
    
  // }

 
  
  // Person.prototype.fullname=function(){
  //   return this.first_name() + " " + this.last_name()
  // }
  



  // var p = new Person();
  // console.log(p.first_name())
  // console.log(p.last_name())
  
  // console.log(p.fullname())



  // var firstName = 'Erik';
  // var lastName = 'Krieg';
  // var fullName = firstName + ' ' + lastName;

  //--------------------------------------------------------------
  //--------------------------------------------------------------
  // write a function fullNameArray that takes an array of objects from 7 and returns a new array of full_name
  // fullNameArray(
    // [{first_name:'karate',last_name:'kid'},
    // {first_name:'jim',last_name:'bob'}]
    //) => ['karate kid', 'jim bob']
//--------------------------------------------------------------
      // 8.



  //--------------------------------------------------------------