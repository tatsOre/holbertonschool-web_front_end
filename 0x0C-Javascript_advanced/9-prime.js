/**
 * Prime numbers & timing execution
 */

const countPrimeNumbers = (num) => {
  const primeNumbers = new Array(num);
  let counter = 0;

  for (let i = 2; i <= num; i++) primeNumbers[i] = true;

  // Crossing out multiples
  for (let i = 2; i <= num; i++) {
    if (primeNumbers[i]) {
      counter++;
      for (let j = i * 2; j <= num; j += i) primeNumbers[j] = false;
    }
  }
  return counter;
};

const start = performance.now();
countPrimeNumbers(100);
const end = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`);
