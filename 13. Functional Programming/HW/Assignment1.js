//1. Given an array of integers, use .map() to subtract the square of each number from that number.

const numsArray = [10, 5, 8, 4, 6];
const subtractSquare = numsArray.map((num)=> num - num ** 2)
console.log(subtractSquare);


// Output: [ -90, -20, -56, -12, -30 ]

//2. Given an array of numbers, use .map() to double the negative numbers and then subtract it from the original number.

const numbsArray = [3, -2, -5, 12, 8, -4, 7];
const result = numbsArray.map(num => num < 0 ? num - (2 * num): num)
console.log(result)
// Output: [3, 2, 5, 12, 8, 4, 7]

//3. Given an array of sentences, use .map() to create an array with each sentence followed by the count of words in it.

const sentencesArray = [

    "JavaScript is a powerful programming language.",
  
    "Web development involves frontend and backend technologies.",
  
    "Coding is a skill that can be learned and mastered over time.",
  
  ];

  
//   Output: 
  
//   ['JavaScript is a powerful programming language. 6',
  
//     'Web development involves frontend and backend technologies. 7',
  
//     'Coding is a skill that can be learned and mastered over time. 12' ]
  
  
//4. Given an array of objects representing cars, extract the brands using .map().

const cars = [

    { brand: "Toyota", model: "Camry" },
  
    { brand: "Honda", model: "Accord" },
  
    { brand: "Ford", model: "Mustang" },
  
  ];
  
  // Output: [ 'Toyota', 'Honda', 'Ford' ]

  //5. Given an array of objects representing movies, extract the genres using .map().

const movies = [

    { title: "Inception", genre: "Sci-Fi" },
  
    { title: "The Shawshank Redemption", genre: "Drama" },
  
    { title: "The Dark Knight", genre: "Action" },
  
  ];
  
  // Output: [ 'Sci-Fi', 'Drama', 'Action' ]

//6. Given an array of objects representing furniture with sizes, increase the dimensions by 10% using .map().

const furniture = [

    { type: "Sofa", width: 200, height: 80 },
  
    { type: "Table", width: 120, height: 60 },
  
    { type: "Chair", width: 50, height: 45 },
  
  ];
  
  // Output: [{ type: 'Sofa', width: '220.0', height: '88.0' }, { type: 'Table', width: '132.0', height: '66.0' },  { type: 'Chair', width: '55.0', height: '49.5' }]

 //7. Given an array of objects representing products with prices, add a new property indicating whether the product is affordable (price less than or equal to 100) or not using .map().

const products = [

    { name: "Laptop", price: 1200 },
  
    { name: "Smartphone", price: 800 },
  
    { name: "Headphones", price: 50 },
  
    { name: "Camera", price: 300 },
  
  ];
  
  // Output: [{ name: 'Laptop', price: 1200, affordable: false }, { name: 'Smartphone', price: 800, affordable: false }, { name: 'Headphones', price: 50, affordable: true }, { name: 'Camera', price: 300, affordable: false }] 


 // 8. Given an array of numbers, filter the even negative numbers into a new array using .filter().

const numbers = [12, 7, 15, -8, 22, -10, 5, 13, -18];

// Output: [-8, -10, -18]



//9. Given an array of objects representing students, filter the students who scored more than 70 in their exams, are active participants, and belong to either the "Math" or "Science" club.

const students = [

  { name: "Alice", score: 85, activeParticipant: true, club: "Math" },

  { name: "Bob", score: 55, activeParticipant: false, club: "History" },

  { name: "Charlie", score: 75, activeParticipant: true, club: "Science" },

];


// Output: [ { name: 'Alice', score: 85, activeParticipant: true, club: 'Math' }, { name: 'Charlie', score: 75, activeParticipant: true, club: 'Science' } ]



//10. Given an array of words, filter the words that contain the letter 'a' and have more than 5 characters into a new array.

const words = ["apple", "banana", "kiwi", "grape", "pear", "orange", "strawberry"];
const resultString = words.filter((str) => str.includes('a') && str.length > 5)
console.log(resultString)
// Output: [ 'banana', 'orange', 'strawberry' ]