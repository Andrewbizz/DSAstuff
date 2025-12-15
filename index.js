// function summation(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     console.log(i);
//     sum += i;
//   }

//   console.log(sum);
// }

// function sum2(n) {
//   const x = (n * (n + 1)) / 2;
//   console.log(x);
// }
// summation(4);

[0, 1];

// given the Number  n find the first n elements of the fibbonacci sequence

// function fibbonacci(n) {
//   let fib = [0, 1];

//   for (let i = 2; i < n; i++) {
//     fib.push(fib[i - 1] + fib[i - 2]);
//   }

//   console.log(fib);
// }

// fibbonacci(8);

function factorial(n) {
  let res = 1;

  for (let i = 1; i < n; i++) {
    res = res * (i + 1);
  }

  return res;
}

console.log(factorial(0));

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(10));
