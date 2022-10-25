//Alphabetize our class roster using only the array methods we've learned so far (pop, shift, unshift, slice and splice)
//you can use conditionals, loops, etc. just not any other JS array methods

const classRoster = [
    "Sarah",
    "Timothy",
    "Nicholas",
    "Jonathan",
    "Grace",
    "Jon",
    "Tam"
  ];
  
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  
  const firstLetter = [];
  
  for (let x = 0; x < alphabet.length; x++) {
    for (let i = 0; i < classRoster.length; i++) {
      let word = classRoster[i];
      if (word[0] == alphabet[x]) {
        firstLetter.push(word);
      }
    }
  }
  
  let secondPhase = [];
  
  function swapElements(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  
  swapElements(firstLetter, 1, 2);
  swapElements(firstLetter, 5, 6);
  
  console.log(firstLetter);


  /* Tried to Use Radix Sort - Uncompleted

const classRoster = [
  "Amy", "Sarah", "Timothy", "Nicholas", "Jonathan", "Grace", "Jon", "Tam"
];

//lowercase words
let lowercaseNames = [];

for (let j = 0; j < classRoster.length; j++){
  //lowercase words
  lowercaseNames.push(classRoster[j].toLowerCase());
}
const alphabet = [
 "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

let buckets = [];
for (i = 0; i < alphabet.length; i++){
  buckets.push(alphabet.slice(i,i+1));
  buckets[i] = [];
}

for (let i = 0; i < lowercaseNames.length; i++){
  let char = lowercaseNames[i];
  for (let j = 0; j < alphabet.length; j++){
    if (char[0] == alphabet[j]){
      buckets[j].splice(i,1,lowercaseNames[i]);
    }
  }
}

lowercaseNames = [];
for (let k = 0; k < alphabet.length; k++){
  if (buckets[k] != 0){
    lowercaseNames.push(buckets[k]);
  }
}
console.log(lowercaseNames)