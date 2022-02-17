var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

//Exercise 1
//stuff.forEach(function (item, index) {
//  if (index % 2 === 0) {
//    console.log(item);
//  }
//});

//Exercise 2
//var removeItem = function (array, item) {
//  var index = array.indexOf(item);
//  if (index === -1) {
//    console.log(`${item} doesn't exist in the array!`);
//  } else {
//    array.splice(index, 1);
//    console.log(`${item} has been removed`);
//  }
//};

//removeItem(stuff, "perfume");
//console.log(stuff);
//removeItem(stuff, "groceries");
//console.log(stuff);

//EXERCISE 3
var versionOne = [];
for (var item of stuff) {
  if (item.includes("s")) {
    versionOne.push(item);
  }
}
console.log(versionOne);

var versionTwo = stuff.filter(function (item) {
  return item.includes("s");
});
console.log(versionTwo);
