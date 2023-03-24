const fs = require('fs');

function part1() {
  const input = fs.readFileSync('./day5/input.txt', 'utf8').split('\n\n');
  const ship = input[0].split('\n')
  const steps = input[1].split('\n');

  let columns = Array.from(Array(9),() => []);
  for (let i = 0; i < ship.length -1 ; i++) {
    let columnIdx = 0;
    for (let j = 0; j < ship[i].length; j++) {
      const stored = ship[i].slice(j,j+3).trim();
      if (stored) columns[columnIdx].push(stored);
      columnIdx++;
      j+=3;
    }
  }

  steps.some((st, i) => {
    const step = st.split(/[^0-9.]/g).filter(c => !!c);
    const qtd = parseInt(step[0]);
    const from = parseInt(step[1])-1;
    const to = parseInt(step[2])-1;
    const toMove = columns[from].slice(0,qtd).reverse();

    columns[from] = columns[from].splice(qtd)
    columns[to] = [...toMove, ...columns[to]];
  });

  return columns.map( c => c[0]).join('');
}

function part2() {
  const input = fs.readFileSync('./day5/input.txt', 'utf8').split('\n\n');
  const ship = input[0].split('\n')
  const steps = input[1].split('\n');

  let columns = Array.from(Array(9),() => []);
  for (let i = 0; i < ship.length -1 ; i++) {
    let columnIdx = 0;
    for (let j = 0; j < ship[i].length; j++) {
      const stored = ship[i].slice(j,j+3).trim();
      if (stored) columns[columnIdx].push(stored);
      columnIdx++;
      j+=3;
    }
  }

  steps.map((st, i) => {
    const step = st.split(/[^0-9.]/g).filter(c => !!c);
    const qtd = parseInt(step[0]);
    const from = parseInt(step[1])-1;
    const to = parseInt(step[2])-1;
    const toMove = columns[from].slice(0,qtd);

    columns[from] = columns[from].splice(qtd)
    columns[to] = [...toMove, ...columns[to]];
  });

  return columns.map( c => c[0]).join('');
}

console.log('Part 1: ', part1());
console.log('Part 2: ', part2());
