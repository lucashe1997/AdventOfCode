const fs = require('fs');

function part1() {
  const input = fs.readFileSync('./input.txt', 'utf8');
  
  for (let i = 3; i < input.length; i++) {
    const element = input[i]; 
    const c1=input[i-3],c2=input[i-2],c3=input[i-1],c4=input[i];
    if (
      [c2,c3, c4].indexOf(c1) >= 0 ||
      [c1,c3,c4].indexOf(c2) >= 0 ||
      [c1,c2,c4].indexOf(c3) >= 0 ||
      [c1,c2,c3].indexOf(c4) >= 0 
    ) {
      continue;
    }

    return i + 1;
  }
}

function part2() {
  const input = fs.readFileSync('./input.txt', 'utf8');
  let curr = []
  for (let i = 0; i < input.length; i++) {
    const element = input[i]; 
    const foundIdx = curr.slice().reverse().findIndex((c) => c == element);
    if (foundIdx >= 0) {
      curr = curr.slice(curr.length - foundIdx)
    }

    curr.push(element);
    if (curr.length == 14) return i + 1;
  }
}

console.log('Part 1: ', part1());
console.log('Part 2: ', part2());
