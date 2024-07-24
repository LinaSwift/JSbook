function pow() {
  let num1 = alert("enter first number");
  let num2 = aler("enter second number");
  if (
    num1 > 1 &&
    Number.isInteger(num1) &&
    num2 > 1 &&
    Number.isInteger(num2)
  ) {
    let square = num1 ** num2;
    alert(square);
  } else {
    alert("enter correct numbers");
  }
}
