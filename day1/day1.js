const readData = require("fs").readFileSync;
const data = readData(__dirname + "/input.txt", "utf-8")
  .split("\n")

  .map((_) => parseInt(_, 10));

//part1

let measurement = 0;

for (let i = 0; i <= data.length; i++) {
  if (data[i] < data[i + 1]) measurement++;
}

console.log(measurement);

//part2

let sumMeasurement = 0;
for (let i = 0; i < data.length - 3; i++) {
  if (
    data.slice(i, i + 3).reduce((a, b) => a + b, 0) <
    data.slice(i + 1, i + 1 + 3).reduce((a, b) => a + b, 0)
  )
    sumMeasurement++;
}

console.log(sumMeasurement);
