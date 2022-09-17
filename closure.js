const bank = (owner) => {
  let balance = 0;
  return {
    deposit: (amount) => {
      balance += amount;
      return balance;
    },
    withdraw: (amount) => {
      balance -= amount;
      return balance;
    },
  };
};
const myBank = bank("Dilip");
console.log(myBank.deposit(100));
console.log(myBank.deposit(1000));
console.log(myBank.owner);
console.log(myBank.withdraw(500));
