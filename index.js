const users= [
  {
    id: 1,
    name: "Ahmed"
,
  },
  {
    id: 2,
    name: "Mo",
  },
];

const namesarray = users.map(user => user.name)
console.log(namesarray);

const csv = namesarray.join(", ");
console.log(csv);

const csv2 = users.map(user => user.name).join(": ");
console.log(csv2)

const numbers = [15, 10, 20];

const allAbove10 = numbers.every(number => number >= 10);
console.log(allAbove10);
const allAbove15 = numbers.every(number => number >= 15);
console.log(allAbove15);
const allAbove20 = numbers.some(number => number >= 20);
console.log(allAbove20);


const shou = greades => {
  return greades.some(greade => greade >= 10);
}

console.log(shou([10, 12, 10, 14]));

const sss1 = greades => {
  return greades.every(greade => greade >= 10);
}

console.log(sss1([10, 12, 9, 14]));

function last_elm(arr) {
  // write your code here
    return arr[arr.length - 1];
}
console.log(last_elm([34,2,23,545,6]));

function delete_element_in_array(arr, index) {
  // write your code here
  return arr.map(function(x){
    if (arr.indexOf(x) !== index){
      
      return arr[x];
    }
  })
};
console.log(delete_element_in_array([3,-3,4,0], 0));









