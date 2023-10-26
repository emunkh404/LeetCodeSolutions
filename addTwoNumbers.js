const addTwoNumbers = function (l1, l2) {
  return (
    parseInt(l1.slice("").reverse().join("")) +
    parseInt(l2.slice("").reverse().join(""))
  );
};

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];
console.log(addTwoNumbers(l1, l2));
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
