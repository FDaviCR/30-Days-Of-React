const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const allAreEven = numbers.every((n) => n % 2 === 0)
const allAreOdd = numbers.every((n) => n % 2 !== 0)

console.log(allAreEven) 
console.log(allAreOdd)