const fs = require('fs');

function part1() {
  const input = fs.readFileSync('./day4/input.txt', 'utf8');
  const pairs = input.split('\n');

  let totals = 0;
  pairs.map( pair => {
    const sections = pair.split(',');
    const sc1 = sections[0].split('-');
    const sc2 = sections[1].split('-');
    const cont1 = sc1[0] - sc2[0];
    const cont2 = sc1[1] - sc2[1];

    if (cont1 == 0 || cont2 == 0)
      totals += 1;
    else if (cont1 < 0 && cont2 > 0)
      totals += 1;
    else if (cont2 < 0 && cont1 > 0)
      totals += 1;
  });
 
  return totals;
}

function part2() {
  const input = fs.readFileSync('./day4/input.txt', 'utf8');
  const pairs = input.split('\n');

  let totals = 0;
  pairs.map( pair => {
    const sections = pair.split(',');
    const sc1 = sections[0].split('-').map(Number);
    const sc2 = sections[1].split('-').map(Number);

    if (sc2[1] >= sc1[0] && sc2[1] <= sc1[1])
      totals += 1;
    else if (sc2[0] >= sc1[0] && sc2[0] <= sc1[1])
      totals += 1;
    else if (sc1[0] >= sc2[0] && sc1[0] <= sc2[1])
      totals += 1;
    else if (sc1[1] >= sc2[0] && sc1[1] <= sc2[1])
      totals += 1;

  });
 
  return totals;
}

console.log('Part 1: ', part1());
console.log('Part 2: ', part2());
