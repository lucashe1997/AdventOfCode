const fs = require('fs');

const checkCommand = (std) => {
  if (!std) return {c: 'end'};
  const args = std.split(' ');
  if (args[0] != '$') return null;
  return { c: args[1], p: args[2] }
}

const getSize = (std) => {
  const args = std.split(' ');
  return args[0] == 'dir' ? 0 : parseInt(args[0]);
}

function part1() {
  const input = fs.readFileSync('./input.txt', 'utf8').split('\n');
  let breadCrumb = [];
  let folders = {};

  for (let i = 0; i < input.length; i+=1) {
    const cmd = checkCommand(input[i]);
    if (cmd) {
      if (cmd.c == 'ls') {
        continue;
      }

      if (cmd.c == 'cd') {
        if (cmd.p == '/') breadCrumb = [''];
        else if (cmd.p == '..') breadCrumb.pop();
        else breadCrumb.push(cmd.p);
        continue;
      }
    }

    const s = getSize(input[i]);
    for (let b = 0; b < breadCrumb.length; b++) {
      const f = breadCrumb.slice(0,b+1).join('/');
      if (f in folders) {
        folders[f] += s;
      } else {
        folders[f] = s;
      }
    }
  }
  let sizeT = 0;
  Object.keys(folders).map( f => {if(folders[f] <= 100000) sizeT += folders[f]})
  return sizeT;

}

function part2() {
  const input = fs.readFileSync('./input.txt', 'utf8').split('\n');
  let breadCrumb = [];
  let folders = {};

  for (let i = 0; i < input.length; i+=1) {
    const cmd = checkCommand(input[i]);
    if (cmd) {
      if (cmd.c == 'ls') {
        continue;
      }

      if (cmd.c == 'cd') {
        if (cmd.p == '/') breadCrumb = [''];
        else if (cmd.p == '..') breadCrumb.pop();
        else breadCrumb.push(cmd.p);
        continue;
      }
    }

    const s = getSize(input[i]);
    for (let b = 0; b < breadCrumb.length; b++) {
      const f = breadCrumb.slice(0,b+1).join('/');
      if (f in folders) {
        folders[f] += s;
      } else {
        folders[f] = s;
      }
    }
  }

  let totalSize = folders[''];
  let freeSpace = 70000000 - totalSize;

  let folderSorted = Object.values(folders).sort((a,b) => a-b);
  return folderSorted.find( s => s + freeSpace >= 30000000);
}

console.log('Part 1: ', part1());
console.log('Part 2: ', part2());
