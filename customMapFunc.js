var words = ["ground", "control", "to", "major", "tom"];

function map(input, callback) {
   var tmp = [];
   input.forEach(function(v, i) {
      // tmp[i] = callback(v)
      tmp.push(callback(v))
   })
   return tmp;
}

console.log(map(words, function(word) {
   return word.length;
}));

console.log(map(words, function(word) {
   return word.toUpperCase();
}));

console.log(map(words, function(word) {
   return word.split('').reverse().join('');
}));

// console.log(map(words))