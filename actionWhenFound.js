// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
   arr.forEach(function(y , i) {
      if (y === "Waldo") {
         found(i);
      }
   });
}

function actionWhenFound(i) {
   console.log("Found him at index: " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);