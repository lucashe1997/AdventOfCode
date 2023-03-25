const fs = require('fs');

function part1() {
  const input = fs.readFileSync('./input.txt', 'utf8');
  const charList = {};

  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    .split('')
    .forEach((c,i) => charList[c] = i + 1);

  const rucksacks = input.split('\n');

  let sum = 0;
  rucksacks.forEach(rucksack => {
    const middle = rucksack.length / 2;
    let item = null;
    for (let cI = 0; cI < middle; cI++) {
      const char = rucksack[cI];
      if (rucksack.substring(middle).indexOf(char) > -1) {
        item = charList[char];
        break;
      }
    }
    if (item) sum += item;
  })

  return sum;
};

function part2() {
  const input = fs.readFileSync('./input.txt', 'utf8');
  const charList = {};

  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    .split('')
    .forEach((c,i) => charList[c] = i + 1);

  const rucksacks = input.split('\n');
  const groups = [];
  let sum = 0;

  for (let i = 0; i < rucksacks.length; i += 3) {
    groups.push(rucksacks.slice(i,i+3));
  }

  groups.map(rucksack => {
    let item = null;
    rucksack[0].split('').some(char => {
      if (rucksack[1].indexOf(char) > -1 && rucksack[2].indexOf(char) > -1) {
        item = charList[char] + 1;
        return true;
      }
    })

    if (item) sum += item;
  })

  return sum;
};

console.log("Part 1: ", part1());
console.log("Part 2: ", part2());