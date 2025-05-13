/* 
You are given an integer array digits, where each element is a digit. The array may contain duplicates.

You need to find all the unique integers that follow the given requirements:

The integer consists of the concatenation of three elements from digits in any arbitrary order.
The integer does not have leading zeros.
The integer is even.
For example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements.

Return a sorted array of the unique integers.
 */

	const findEvenNumbers = (digits)=>{
    let result = new Set();
    for (let i = 0; i < digits.length; i++) {
        for (let j = 0; j < digits.length; j++) {
            for (let k = 0; k < digits.length; k++) {
                if (i === j || j === k || i === k) continue;

                let digit1 = digits[i];
                let digit2 = digits[j];
                let digit3 = digits[k];

                if (digit1 !== 0 && digit3 % 2 === 0) {
                    let num = digit1 * 100 + digit2 * 10 + digit3;
                    result.add(num);
                }
            }
        }
    }
    return Array.from(result).sort((a, b) => a - b);
};

const test1 = [2,1,3,0];
const output1 = [102,120,130,132,210,230,302,310,312,320];
const test2 = [2,2,8,8,2];
const output2 = [222,228,282,288,822,828,882];
const test3 = [3,7,5];
const output3 = [];


const testingResults = (input, output) => {
    const result = findEvenNumbers(input);
    if (JSON.stringify(result) === JSON.stringify(output)) {
        console.log(`Test passed for input: ${input}`);
    } else {
        console.log(`Test failed for input: ${input}. Expected ${output} but got ${result}`);
    }
}

testingResults(test1, output1);
testingResults(test2, output2);
testingResults(test3, output3);