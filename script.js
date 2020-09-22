let row = 5;

function tri(row, column) {
  let x = [];
  x = factorial(row) / (factorial(row - column) * factorial(column));
  return x;
}
/* for (let i=0; i<row+1; i++){
  alert(tri(row, i));
} */
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

function answer() {
	let a=0;
	let h=[];
	for (let i=0; i<5; i++){
		h.push();
	}
	return h;
}

function calc() {
  let exponent = document.getElementById('exponent').value;
  let expression = document.getElementById('expression').value;
  document.getElementById('ans').innerHTML = 'You answer is: ' + expression;
}
