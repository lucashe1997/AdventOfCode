const fs = require('fs');

function part1() {
  const input = fs.readFileSync('./day5/input.txt', 'utf8');
  const ship = input.split('\n\n')[0]

  ship.split("\n").map( c => 
    console.log(c)
  );
}

function part2() {
  const input = fs.readFileSync('./day5/input.txt', 'utf8');
}

console.log('Part 1: ', part1());
console.log('Part 2: ', part2());
