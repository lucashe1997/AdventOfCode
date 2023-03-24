const fs = require('fs');

function part1() {
  const input = fs.readFileSync('./day1/input.txt', 'utf8');
  const caloriesByElf = input.split('\n\n');
  const totals = []
  caloriesByElf.map( calories => {
    totals.push(calories.split('\n').reduce((t, c) => t + parseInt(c), 0));
  });
 
  return Math.max(...totals);
}

function part2() {
  const input = fs.readFileSync('./day1/input.txt', 'utf8');
  const listByElf = input.split('\n\n');
  const caloriesByElf = listByElf.map( calories => {
    return calories.split('\n').reduce((t, c) => t + parseInt(c), 0);
  }).sort((a,b) => a-b).reverse();

  const total = caloriesByElf.slice(0,3).reduce((t, c) => t + c, 0);
  return total;
}

console.log('Part 1: ', part1());
console.log('Part 2: ', part2());