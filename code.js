function modulo(num1, num2) {
  // your code here
  if (num1 === 0)
  {
      return 0;
  }
  if (num2 === 0)
  {
      return NaN;
  }
  if (isNaN(num1) || isNaN(num2))
  {
      return NaN;
  }
  var minus = 1;
  if (num1 <0)
  {
      minus = -1;
  }
  
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  while(num1 >= num2)
  {
      num1 -= num2;
  }

  var remainder = minus * num1;
  return remainder;
}
