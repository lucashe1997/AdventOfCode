const fs = require('fs');

function part1() {
  const input = fs.readFileSync('./day2/input.txt', 'utf8');
  const plays = {'X': 1,'Y': 2,'Z': 3};
  const points = [0,3,6];
  const ruleSheet = {
    A: ['Z','X','Y'],
    B: ['X','Y','Z'],
    C: ['Y','Z','X'],
  }
  const rounds = input.split('\n');
  let totalPoints = 0;

  rounds.map(round => {
    const jogada = round.split(' ');
    totalPoints += points[ruleSheet[ jogada[0] ].indexOf(jogada[1])] + plays[jogada[1]];
  })

  return totalPoints;
};

function part2() {
  const input = fs.readFileSync('./day2/input.txt', 'utf8');
  const plays = {'X': 1,'Y': 2,'Z': 3};
  const points = [0,3,6];
  const playsIdx = ['X','Y','Z'];
  const ruleSheet = {
    A: ['Z','X','Y'],
    B: ['X','Y','Z'],
    C: ['Y','Z','X'],
  }
  const rounds = input.split('\n');
  let totalPoints = 0;

  rounds.map(round => {
    const jogada = round.split(' ');
    const myPlay = ruleSheet[jogada[0]][playsIdx.indexOf(jogada[1])];
    totalPoints += plays[myPlay] + points[playsIdx.indexOf(jogada[1])];
  })

  return totalPoints;
};

console.log('Part 1: ', part1());
console.log('Part 2: ', part2());