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