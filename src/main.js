// main.js
import { knightMovesPath } from './knight.js';

function runKnightMoves(start, end) {
  const path = knightMovesPath(start, end);
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  for (let pos of path) {
    console.log(pos);
  }
}

// Test examples
runKnightMoves([0, 0], [1, 2]);
runKnightMoves([0, 0], [3, 3]);
runKnightMoves([0, 0], [7, 7]);
