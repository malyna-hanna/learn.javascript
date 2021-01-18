function Calculator(value){
 this.value = value;

 this.sum = getSum;
 this.mult = getMult;
 this.sub = getSub;
 this.div = getDiv;
 this.set = getSet;
}

function getSum(x) {
  this.value = this.value + x;
  console.log(this.value);
}
function getMult(x) {
  this.value = this.value * x;
  console.log(this.value);
}
function getSub(x) {
  this.value = this.value - x;
  console.log(this.value);
}
function getDiv(x){
  this.value= this.value / x;
  console.log(this.value);
}
function getSet(x) {
  this.value = 100;
  console.log(this.value);
}
const calc = new Calculator(10);
calc.sum(5);
calc.mult(10);
calc.sub(40);
calc.div(10);
calc.set(100);
calc.sum(20)


