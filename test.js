const arr = ["a", "b", "c", "d", "e"];


const arr2 = [arr.pop(), "4"];

const arr3 = arr2.filter((item) => item !== "b");

console.log(arr3);

console.log(arr2);

console.log(arr);

//* FUNCTION currying

const add = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
console.log(add(1));
