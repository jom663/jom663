var springBreak = ['swimming', 'great food', 'walking', 'scary flight', 'rooftop bar'];

console.log(6 * 11);
console.log(33 + 33);
console.log(6 * (5 + 6));
console.log((2 * 3) * (5 + 6));
console.log(132 / 2);
console.log(67 - 1);

var groupOne = ['Ana', 'Gaurika', 'Moon'];
var groupTwo = ['Victoria', 'Liz', 'Jissaura'];
var groupThree = ['Kyle', 'Carol', 'Fish'];

var allStudentsHere = false;

var studentsMissing = true;

var arrayOfArrays =[
groupOne,
groupTwo,
groupThree];

for ( var index1 = 0; index1 < arrayOfArrays.length; index1++ ) {
  console.log('This group is number' + (index1 + 1));
  console.log('The sudents in this group are:');
  
  for (var index2 = 0; index2 < arrayOfArrays[index1].length; index2++){
    console.log (arrayOfArrays[index1][index2]);
  }
}