var countdownGenerator = function (x) {
  /* your code here */
  var id = x + 1;

  return function(){
    if (id <= 0){
      return console.log("Rockets already gone, bub!");
    }
    else{
      id -= 1;
      console.log('T minus.... ' + id)
    }
  }
};
countdownGenerator(3)

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!