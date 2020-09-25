let row = 3;

function tri(row, column) {
  let x;
  x = Math.round((factorial(row) / (factorial(row - column) * factorial(column))));
  return x;
}

let h = [];

for (let i = 0; i < row + 1; i++) {
  h.push(tri(row, i));
}

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

let p = [];



function calc() {
  for (let i = 0; i < h.length; i++) {
    let exponent = document.getElementById('exponent').value;
    let expression1 = document.getElementById('expression1').value;
    let expression2 = document.getElementById('expression2').value;

    if (i + 1 < h.length) {
      p.push(h[i] + '・' + '(' + expression1 + ')' + (exponent - i).toString().sup() + '・ (' + expression2.toString() + ')' + i.toString().sup() + ' + ');
    } else {
      p.push(h[i] + '・' + '(' + expression1 + ')' + (exponent - i).toString().sup() + '・ (' + expression2.toString() + ')' + i.toString().sup());
    }
  }
  document.getElementById('ans').innerHTML = p.join().replace(',', '');
}

function calc2() {
  for (let i = 0; i < h.length; i++) {
    let exponent = document.getElementById('exponent').value;
    let expression1 = document.getElementById('expression1').value;
    let expression2 = document.getElementById('expression2').value;

    if (i + 1 < h.length) {
      p.push(h[i] * Math.pow(expression2, i) + '' + expression1.toString() + (exponent - i).toString().sup() + '+');
    }else {
			p.push(h[i] * Math.pow(expression2, i) + '' + expression1.toString() + (exponent - i).toString().sup());
		}
  }
  document.getElementById('calculated').innerHTML = p.join().replace(',', '');
}
