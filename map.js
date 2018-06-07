var words = ["ground", "control", "to", "major", "tom"];


var myMap = function(arr, myFunction) {
  var newArray = [];

  for (i = 0; i < arr.length; i++) {
    var transformedElement = myFunction(arr[i]);
    newArray.push(transformedElement);
  }

  return newArray;
}

var myUpperCase = function(e) {
  return e.toUpperCase();
};

var getLength = function(e) {
  return e.length;
};

var reverseWords = function(e) {
  return e.split('').reverse().join('');
}

console.log(myMap(words, getLength));
console.log(myMap(words, myUpperCase));
console.log(myMap(words, reverseWords));