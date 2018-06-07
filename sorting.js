var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


function sortByAge (a, b) {
  return b.age - a.age;
};


function sortByNameThenAge (a,b){
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase(); 
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return sortByAge(a,b);
}



console.log(students.sort(sortByNameThenAge));