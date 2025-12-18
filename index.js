// function summationx(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }

//   console.log(sum);
// }

// summationx(5);

// function sum2(n) {
//   const x = (n * (n + 1)) / 2;
//   console.log(x);
// }
// summation(4);

// given the Number  n find the first n elements of the fibbonacci sequence

// function fibbonacci(n) {
//   let fib = [0, 1];

//   for (let i = 2; i < n; i++) {
//     fib.push(fib[i - 1] + fib[i - 2]);
//   }

//   console.log(fib);
// }

// fibbonacci(8);

// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(10));

// function summation(x) {
//   let sum = 0;

//   for (let i = 1; i <= x; i++) {
//     sum = i + sum;
//   }

//   console.log(sum);
// }

// summation(5);

// given the Number 5 find the first 5 elements of the fibbonacci sequence

// function fibbo(n) {
//   let base = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     base.push(base[i - 1] + base[i - 2]);
//   }

//   console.log(base);
// }

// fibbo(5);

// function factorial(v) {
//   let res = 1;

//   for (let i = 2; i <= v; i++) {
//     res = res * i;
//   }

//   console.log(res);
// }

// factorial(5);

// function factorial(n) {
//   let res = 1;

//   for (let i = 1; i < n; i++) {
//     res = res * (i + 1);
//   }

//   return res;
// }

// console.log(factorial(5));

// function isPrime(n) {
//   for (let i = 2; i < n && n > 1; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(7));

// i returned too early and shouldnt have returned withing my loop,  i was actually using true for when the divisor was found in my code hence why i wrote it that way and i actually forgot the let in the loop but heres the version i have now in it my loop only runs as far as i is less than N and N is greater than 1, does that not work?

//given a positive number N, determine if N is a pwer of two or not
// an integer is a power of two if there exists an integer x such that n === 2X =

// therefore if n%2 === 0 then it is a power of two

function ispowerofbase(n) {
  if (n < 1) return false;

  let base = 2;

  for (; n % base === 0; n = n / base) {}

  return n === 1;
}
console.log(ispowerofbase(1));
console.log(ispowerofbase(5));
console.log(ispowerofbase(4));

//recursion

// find the nth element of the fibbonacci sequence giving the number n

function nthEl(n) {
  let base = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    base.push(base[i - 1] + base[i - 2]);
  }

  console.log(base[n]);
}

nthEl(5);

// recurcively;

function recurciveNth(n) {
  if (n < 2) return n;

  return recurciveNth(n - 1) + recurciveNth(n - 2);
}

console.log(recurciveNth(5));
