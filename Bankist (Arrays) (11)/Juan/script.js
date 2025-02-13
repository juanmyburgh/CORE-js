'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium'
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard'
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium'
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic'
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Simple Array Methods
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));   // negative takes from end
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log(arr.slice([...arr]));

// SPLICE - returns extracted values like slice, but deletes from source
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE - mutates source
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT - DOESN'T mutate source
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));


//------------------------------------------------------------------------
// The New at Method

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last element of array
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-2));

// also applies to arrays
console.log('juan'.at(0));
console.log('juan'.at(-1));


//------------------------------------------------------------------------
// Looping Arrays: forEach

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
};

console.log('-------FOR EACH---------');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(-400)


//------------------------------------------------------------------------
// forEach with Maps and Sets

// Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

currencies.forEach(function (val, key, map) {
  console.log(`${key}: ${val}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (val, _, map) {
  console.log(`${val}: ${val}`);
});


//------------------------------------------------------------------------
// Data Transformations: map, filter, reduce

// Map
// map an array to a new arrray
// returns a new array containing the results of applying an operation on all orgiinal array elements


// Filter
// filter returns a new array containing the array elements that passed a specified test condition

// Reduce
// reduce boils down ("reduces") all array elements down to one single value (eg. adding all elements together)



//------------------------------------------------------------------------
// The map Method - new array after operation

// const eurToUsd = 1.1;

// functional programming paradigm - USE THIS ONE
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
const movementsUSDArrow = movements.map(mov => mov * eurToUsd);

// console.log(movementsUSD);
// console.log(movementsUSDArrow);


// older method/inefficient - Try not to use this
// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// };
// console.log(movementsUSDfor);


const movementDesc = movements.map((mov, i) =>
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
// console.log(movementDesc);

//------------------------------------------------------------------------
// The filter Method - new array of specific items

const deposits = movements.filter(mov => mov > 0);

const withdrawals = movements.filter(mov => mov < 0);


//------------------------------------------------------------------------
// The reduce Method - new array of accumulate/sum/totals
const balance = movements.reduce((acc, cur) => acc += cur, 0);

// Max value - note: should start at index 0 of arr
const max = movements.reduce((acc, mov) => mov > acc ? acc = mov : acc, movements[0]);
console.log(max);


//------------------------------------------------------------------------
// Chaining Methods

// .filter.map.reduce

const eurToUsd = 1.1;
// PIPELINE
const totalDepositsUSD = Math.abs(
  movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0).toFixed(2)
);
console.log(totalDepositsUSD);



//------------------------------------------------------------------------
// The Find method - return first match in arr

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner = 'Jessica Davis');
console.log(account);

// challenge - for of loop vers
const accountFor = '';

for (const account of accounts.entries()) {
  if (account.owner = 'Jessica Davis') {
    accountFor = account;
  }
};
console.log(accountFor);



//------------------------------------------------------------------------
// The New findLast, findLastIndex methods

console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

// large = > 2000
const lastLargeMovement = movements.length - movements.findLastIndex(mov => Math.abs(mov) > 2000);
console.log(`Your latest large movement was ${lastLargeMovement} movements ago`);




//------------------------------------------------------------------------
// some and every

console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


//------------------------------------------------------------------------
// flat and flatMap

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());  // Depth is 1 by default

const arrDeep = [[1, [2, 3]], [[4, 5], 6], 7, 8];
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// flat
const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flatMap
const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);


//------------------------------------------------------------------------
// sorting arrays

// Strings
const owners = ['Jonas', 'Juan', 'Matilda', 'Zack', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
// console.log(movements.sort()); // Doesn't work -> converts to str

// return < 0, A, B (keep order)
// return > 0, B, A (reverse order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);


//------------------------------------------------------------------------
// array grouping

console.log(movements);
const groupedMovements = Object.groupBy(movements, movement => movement > 0 ? 'deposits' : 'withdrawals');
console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;
  if (movementCount >= 8) return 'very active';
  if (movementCount >= 4) return 'active';
  if (movementCount >= 1) return 'moderate';
  return 'inactive';
});
console.log(groupedByActivity);

// const groupedAccounts = Object.groupBy(accounts, account => account.type);
const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);
console.log(groupedAccounts);


//------------------------------------------------------------------------
// more ways of creating/filling arrays

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
console.log(x.map(() => 5));

// x.fill(1);
// x.fill(1, 3);
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);




labelBalance.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  // grab movements from UI and convert to array
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);
});


// 100x 6-sided Dice rolls assignment;
const rolls = Array.from({ length: 100 }, () => Math.floor(Math.random() * 6) + 1);
// console.log(rolls);


//------------------------------------------------------------------------
// Non-destructive alternatives: toReversed, toSorted, toSpliced, with

// toReversed
console.log(movements);
// const reversedMov = movements.reverse(); //This manipulates original array
const reversedMovOther = movements.slice().reverse(); // Non destructive
const reversedMov = movements.toReversed(); // even shorter
// console.log(reversedMov);
// console.log(reversedMovOther);

// toSorted (sort), toSpliced (splice)

// movements[1] = 2000; // Destructive
const newMovements = movements.with(1, 2000);
console.log(newMovements);
console.log(movements);


//------------------------------------------------------------------------
// Summary: which array method?
/*
 Mutate original;
  Add:
    .push (end)
    .unshift (start)
  Remove:
    .pop (end)
    .shift (start)
    .splice (any)
  Others:
    .reverse
    .sort
    .fill
(These should usually be avoided ^)

New array;
  same length: 
    .map (loop)
  filtered: 
    .filter
  portion: 
    .slice
  1 item replaced: 
    .with
  flattened: 
    .flat
    .flatmap
  reversed: 
    .reverse
  sorted: 
    .toSorted
  with deleted items:
    .toSpliced
  joining: 
    .concat

Array Index;
  based on value:
    .indexOf
  based on condition:
    .findIndex
    .findLastIndex

Array element;
  based on test condition:  
    .find
    .findLast
  based on position:
    .at

Array includes;
  based on value:
    .includes
  based on test condition:
    .some
    .every

A new string;
  based on separator:
    .join

To transform to value;
  based on accumulator:
    .reduce (to boil down to single value of any type, new array or object)

To just loop array;
  based on callback:
    .forEach


----More Array Tools & Tech----;
Grouping: 
  Object.groupBy

New array from scratch:
  Array.from

New array with n empty positions (use together with .fill method):
  new Array(n) 

Joining 2+ arrays;
  [...arr1, ...arr2]

Creating a new array containing unique values from arr
  [...new Set(arr)]

New array containing unique elements present in both arr1 + arr2:
  [...new Set(arr1).intersection(new Set(arr2))]



//------------------------------------------------------------------------
// Array Methods Practice

// 1)
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// 2)
const numDeposits1k = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000)
  .length;
console.log(numDeposits1k);

const numDeposits1kReduce = accounts
  .flatMap(acc => acc.movements)
  //.reduce((count, cur) => cur >= 1000 ? count + 1 : count, 0);
  .reduce((count, cur) => cur >= 1000 ? ++count : count, 0);
console.log(numDeposits1kReduce);

// Prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

// 3)
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce((sums, cur) => {
    // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
    sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
    return sums;
  }, { deposits: 0, withdrawals: 0 });
console.log(deposits, withdrawals);

// 4)
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalise = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'the', 'and', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .trim()
    .split(' ')
    .map(word => exceptions
      .includes(word) ? word : capitalise(word)
    )
    .join(' ');

  return capitalise(titleCase)
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE   '));


*/
/////////////////////////////////////////////////
// PROJECT: "Bankist" Application

// Create Usernames for each account
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('')
  });

};
createUsernames(accounts);

// Display Movements log
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  // .textContent = 0

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}</div>
    </div>
     `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Calculate the balance of account
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc += cur, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// Calculate the In/Out/Interest summaries
const calcDisplaySummary = function (acc) {
  // Income Summary
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  // Outgoing Summary
  const outgoings = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outgoings)}€`;

  // Interest Summary
  const interest = acc.movements.filter(mov => mov > 0).map(deposit => deposit * acc.interestRate / 100).filter(int => int >= 1).reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${Math.abs(interest)}€`;
};

const updateUI = function (acc) {
  // Display Movements
  displayMovements(acc.movements);

  // Display Balance
  calcDisplayBalance(acc);

  // Display Summary
  calcDisplaySummary(acc);
}

// Event handler ---------------------------
let currentAccount;

// Login
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI & Welcome Msg
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear Login inputs
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);

  };

});

// Transfer
btnTransfer.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  const amount = inputTransferAmount.value;
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  // console.log(amount, receiverAcc);

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log('Transfer Valid');

    // Do transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  };

  // Clear Transfer inputs
  inputTransferAmount.value = inputTransferTo.value = '';

});

// Loan
btnLoan.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    // Add Movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  };

  // Clear Loan inputs
  inputLoanAmount.value = '';
});


// Close Account
btnClose.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  if (
    inputCloseUsername &&
    inputClosePin &&
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === Number(currentAccount.pin)
  ) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  };

  // Clear Transfer inputs
  inputCloseUsername.value = inputClosePin.value = '';
});

// Sort
let sorted = false;
btnSort.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});


/////////////////////////////////////////////////






