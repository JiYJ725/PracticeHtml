const log = console.log;
//const readFileSyncAddress = "/dev/stdin"; // BackJun Submit
const readFileSyncAddress = "backjun/input.txt"; // vscode Test
const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .split("\n");

const sol = (input) => {
  for (let i = 1; i < input.length; i++) {
    const stack = [];
    let res = "YES";
    let strArr = input[i].split("");
    for (let j = 0; j < strArr.length; j++) {
      if (j === 0) {
        stack.push(strArr[0]);
        continue;
      }
      if (stack[stack.length - 1] === "(" && strArr[j] === ")") stack.pop();
      else stack.push(strArr[j]);
    }
    if (stack.length !== 0) res = "NO";
    console.log(res);
  }
};

sol(input);
