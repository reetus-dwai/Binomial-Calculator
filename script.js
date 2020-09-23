let row = 30;

function tri(row, column) {
  let x;
	x = Math.round((factorial(row) / (factorial(row - column) * factorial(column))));
  return x;
}
let h = [];
for (let i=0; i<row+1; i++){
	h.push(tri(row, i));
	document.getElementById('ans').innerHTML = h;
}
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
function calc() {
	let exponent = document.getElementById('exponent').value;
  let expression = document.getElementById('expression').value;
  document.getElementById('ans').innerHTML = h[0]}


 /*・*/
