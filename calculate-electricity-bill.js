function electricityBill(unit) {
  let bill;
  if (unit > 200) {
    let first100UnitsBill = 100 * 5;
    let second100UnitsBill = 100 * 6;
    let remainingBill = (unit - 200) * 7;
    bill = first100UnitsBill + second100UnitsBill + remainingBill;
  } else if (unit > 100) {
    let first100UnitsBill = 100 * 5;
    let remainingBill = (unit - 100) * 6;
    bill = first100UnitsBill + remainingBill;
  } else if (unit <= 100) {
    bill = unit * 5;
  }
  return bill;
}
console.log(electricityBill(220));
