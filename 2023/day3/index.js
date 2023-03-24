const fs = require('fs');

function part1() {
  const input = fs.readFileSync('./day3/input.txt', 'utf8');
  const charList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const rucksacks = input.split('\n');

  const sameItems = [];
  rucksacks.map(rucksack => {
    const compartments = [
      rucksack.slice(0, rucksack.length / 2),
      rucksack.slice(rucksack.length / 2)
    ];

    let item = null;
    compartments[0].split('').some((char) => {
      if (compartments[1].indexOf(char) > -1) {
        item = charList.indexOf(char) + 1;
        return true;
      }
    });
    if (item) sameItems.push(item);
  })

  return sameItems.reduce((t, i) => t + i, 0);
};

function part2() {
  const input = fs.readFileSync('./day3/input.txt', 'utf8');
  const charList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const rucksacks = input.split('\n');
  const groups = [];
  const sameItems = [];

  for (let i = 0; i < rucksacks.length; i += 3) {
    groups.push(rucksacks.slice(i,i+3));
  }

  groups.map(rucksack => {
    let item = null;
    rucksack[0].split('').some(char => {
      if (rucksack[1].indexOf(char) > -1 && rucksack[2].indexOf(char) > -1) {
        item = charList.indexOf(char) + 1;
        return true;
      }
    })

    if (item) sameItems.push(item);
  })

  return sameItems.reduce((t, i) => t + i, 0);
};

console.log("Part 1: ", part1());
console.log("Part 2: ", part2());