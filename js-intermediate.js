// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

var getFib = (num) => {
  if (num === 1) 
  {
    return [1, 1]
  } 
  else 
  {
    var fib = getFib(num - 1)
    fib.push(fib[fib.length - 1] + fib[fib.length - 2])
    return fib
  }
}

 console.log(getFib(9))



// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]

const oddChecker = (array) => {
    let newArray = []
    var numsOnly = array.filter(Boolean) 
    for(let i = 0; i < numsOnly.length; i++){
        if(array[i]%2 !== 0 ){
            newArray.push(numsOnly[i] )
        } 
    }
    return newArray.filter(Number)
}


console.log(oddChecker(fullArr1))
console.log(oddChecker(fullArr2))


// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes in an array and returns an array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// Expected output: ["e", "c", "h", "o", "1", "9"]

const newArr = (array) =>{
    let backwardsArray = array.reverse()
        return backwardsArray
}

console.log(newArr(originalArray1))
console.log(newArr(originalArray2))


// 5. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3


const letterCounter =(string) => {
    let onlyLs = []
    var newArray = ourString.toLowerCase().split("")
    for(let i = 0; i < newArray.length; i++ ){
        if (newArray[i] === "l"){
            onlyLs.push(newArray[i])
        }
    }
    return onlyLs.length
}

console.log(letterCounter(ourString))


// 6. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”


const midLetter = (string) => {
    var position
    var length
    if(string.length % 2 == 1) {
        position = string.length / 2
        length = 1
    } else {
        position = string.length / 2 - 1
        length = 2
    }

    return string.substring(position, position + length)
}



console.log(midLetter(middleLetters1))
console.log(midLetter(middleLetters2))




// 7. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

var sphereRadius = { 
    sphere1: 100 , 
    sphere2: 20 ,
    sphere3: 5
}


const areaOfSphere = (r) =>{
    return 4*Math.PI*r**2
    
}

console.log(areaOfSphere(sphereRadius.sphere1))
console.log(areaOfSphere(sphereRadius.sphere2))
console.log(areaOfSphere(sphereRadius.sphere3))




// 8. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}

var {make, model, specs} = myCar

console.log([myCar.specs.doors, myCar.specs.transmission])



// STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []


const addEveryOther= (array) =>{
    let newArray = array.map((value, index) => array.slice(0,index + 1).reduce((a, b) => a + b));
    return newArray
}

console.log(addEveryOther(numbersToAdd1))
console.log(addEveryOther(numbersToAdd2))
console.log(addEveryOther(numbersToAdd3))