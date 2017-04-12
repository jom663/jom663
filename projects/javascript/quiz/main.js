var myName = 'Moonnyung Jo';
console.log (myName);

var favoriteNumber = 7;
console.log (favoriteNumber);

var favoriteNumberst = '7';
console.log (favoriteNumberst);

var bValue = true;
console.log (bValue);

var firstName = ['M', 'O', 'O', 'N', 'N', 'Y', 'U', 'N', 'G'];
console.log (firstName);

var myArray = ['bubbletea', true, 1120];
console.log (myArray);

console.log('hot' + 'dog');

console.log(49 + 51);

var firstItem = firstName[0];
var lastItem = firstName[firstName.length - 1];
console.log (firstItem);
console.log (lastItem);

'supercalifragilisticexpialidocious'.length;

console.log(firstName.length, 'equals to the length of characters in your last name');

var allStudentsHere = true;

if (allStudentsHere = true) {console.log('all the students are in class'); } else {console.log('not everyone is here'); }
  
for ( var i = 0; i < firstName.length; i++ ) {
  console.log( firstName[i]);
}

var date = new Date;
var time = date.getHours();

if ( time > 19 && time < 22) {
  console.log(true);
} else {
  console.log(false);
}

var myArray1 =['sushi', 'pasta', 'coffee'];
var myArray2 =['cat', 'whale', 'horse'];
var myArray3 =['london', 'newyork', 'prague'];
var myArray4 =['charmander', 'squirtle', 'bulbasaur'];
var arrayOfArrays =[
myArray1,
myArray2,
myArray3,
myArray4];

console.log ('My favorite foods are');
for ( var a = 0; a < myArray1.length; a++ ) {
  console.log( myArray1[a]);
};

console.log ('My favorite animals are');
for ( var b = 0; b < myArray2.length; b++ ) {
  console.log( myArray2[b]);
};

console.log ('My favorite places are');
for ( var c = 0; c < myArray3.length; c++ ) {
  console.log( myArray3[c]);
};

console.log ('My favorite Pokemons are');
for ( var d = 0; d < myArray4.length; d++ ) {
  console.log( myArray4[d]);
};

for ( var index1 = 0; index1 < arrayOfArrays.length; index1++ ) {
  console.log('Group' + (index1 + 1));
    for (var index2 = 0; index2 < arrayOfArrays[index1].length; index2++){
    console.log (arrayOfArrays[index1][index2]);
  }
}