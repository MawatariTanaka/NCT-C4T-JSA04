const yearInput = parseInt(prompt("Please type in a year."));
const leapYearCheck = (year) => {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    if (year % 4 === 0) return true;
    return false;
}
if (leapYearCheck(yearInput)) {
    console.log(`${yearInput} is a leap year.`);
} else {
    console.log(`${yearInput} is not a leap year.`);
}

const strInput1 = prompt("Please give a random string.");
const reverseString = (string) => {
    let i = string.length - 1;
    let ans = '';
    while (i >= 0) {
        ans += string[i];
        i--;
    }
    return ans;
}
console.log(`The reverse of the given string (${strInput1}) is ${reverseString(strInput1)}.`);

const strInput2 = prompt("Please give a random string.").toLowerCase();
const capitalStr = strInput2.replace(/\b\w/g, c => c.toUpperCase());
console.log(capitalStr);