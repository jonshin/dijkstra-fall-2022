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


