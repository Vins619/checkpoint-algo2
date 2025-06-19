 function reverseString(str) {
    return str.split("").reverse().join("");
}
function countcharacters(str) {
    return str.length;
}
function caoitalizeWords(str) {
    return str.split("").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
}
function findMinMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
function filterArray(arr) {
    return arr.filter(num => num % 2 === 0);
}
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}