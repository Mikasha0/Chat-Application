function BankAccount(accountHolderName, balance = 0) {
  this.accountHolderName = accountHolderName;
  this.balance = balance;
}

let aniket = new BankAccount("aniket tamrakar", 36000);

BankAccount.prototype.deposit = function (amount) {
  return (this.balance += amount);
};

aniket.deposit(3000);

console.log(aniket);
