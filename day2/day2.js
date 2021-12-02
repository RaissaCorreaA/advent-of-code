const readFile = require("fs").readFileSync;
const data = readFile(__dirname + "/input.txt", "utf-8")
  .split("\n")
  .filter((_) => _.trim());

//part 1
let horizontal = 0;
let depth = 0;

for (let i = 0; i < data.length; i++) {
  const coursePlan = data[i].split(" ");
  switch (coursePlan[0]) {
    case "forward":
      horizontal += parseInt(coursePlan[1]);
      break;
    case "down":
      depth += parseInt(coursePlan[1]);
      break;
    case "up":
      depth -= parseInt(coursePlan[1]);
      break;
  }
}
console.log(horizontal * depth);

//part2
let aim = 0;
let horizontal2 = 0;
let depth2 = 0;

for (let i = 0; i < data.length; i++) {
  const coursePlan2 = data[i].split(" ");
  switch (coursePlan2[0]) {
    case "forward":
      horizontal2 += parseInt(coursePlan2[1]);
      depth2 += aim * parseInt(coursePlan2[1]);
      break;
    case "down":
      aim += parseInt(coursePlan2[1]);
      break;
    case "up":
      aim -= parseInt(coursePlan2[1]);
      break;
  }
}
console.log(horizontal2 * depth2);
