const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

function finalPosition(z) {
  let x = 0
  let y = 0
  for (let i of z) {
    switch (i) {
      case 'north':
        x += 1;
        break;
      case 'west':
        y -= 1;
        break;
      case 'east':
        y += 1;
        break;
      case 'south':
        x -= 1;
        break;
    }

  } const result = [];
  result.push(x);
  result.push(y);
  return result;
}

console.log(finalPosition(moves));
