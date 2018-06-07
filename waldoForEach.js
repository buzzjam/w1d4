function findWaldo(arr, found) {
 arr.forEach(function(element) {
   if (element === "Waldo") {
     found(arr.indexOf(element))
   }
 })
};

function actionWhenFound(index) {
  console.log(`Found him at array ${index}.`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);