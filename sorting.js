var array = [10, 2, 5, 1, 9];

var result = array.sort(function(a, b) {
if (a < b){
  return -1;
}
else if (a > b){
  return 1;
}
else {
  return 0;
}
console.log(a, b)
});

console.log(result)
// function add(a, b, callback) {
//   // console.log(callback.toString());
//   callback(a + b);
// }

// add(1, 0, console.log)
// add(1, 1, show)
// add(1, 2, log)
// add(1, 3, function(v) {
//   console.log('ia', v);
// })


// function show(v) {
//   console.log('showing', v);
// }

// function log(v) {
//   console.log('logging', v);
// }