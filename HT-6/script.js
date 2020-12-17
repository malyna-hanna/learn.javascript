const n = Number(prompt('Enter number'));
function sumTo(n) {
  console.log(n);
  if (n == 0) return 0;
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}
console.log('SumOfNumbers', sumTo(n)); 
