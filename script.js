let row = 25;
function tri(row, column){
  x = factorial(row)/(factorial(row-column)*factorial(column));
  return x;
}
for (let 1=0; i<row+1; i++){
  alert(tri(row, i))
}
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
