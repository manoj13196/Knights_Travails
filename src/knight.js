// knight.js

// Define all 8 possible knight moves
const knightMoves = [
    [2, 1], [1, 2],
    [-1, 2], [-2, 1],
    [-2, -1], [-1, -2],
    [1, -2], [2, -1]
  ];
  
  // Helper function to check if a position is within board limits
  function isValid(x, y) {
    return x >= 0 && x <= 7 && y >= 0 && y <= 7;
  }
  
  // BFS function to find the shortest path
  export function knightMovesPath(start, end) {
    const queue = []; // queue for BFS traversal
    const visited = new Set(); // to avoid revisiting positions
  
    // Each item in queue is an object: { position: [x, y], path: [...steps] }
    queue.push({ position: start, path: [start] });
    visited.add(start.toString()); // mark start as visited
  
    while (queue.length > 0) {
      const current = queue.shift(); // FIFO
  
      const [x, y] = current.position;
  
      // Base Case: If we reach the target
      if (x === end[0] && y === end[1]) {
        return current.path;
      }
  
      // Generate all 8 possible knight moves
      for (let [dx, dy] of knightMoves) {
        const newX = x + dx;
        const newY = y + dy;
        const newPos = [newX, newY];
  
        if (isValid(newX, newY) && !visited.has(newPos.toString())) {
          visited.add(newPos.toString());
          queue.push({
            position: newPos,
            path: [...current.path, newPos] // extend path
          });
        }
      }
    }
  
    return []; // In case no path is found (should never happen on 8x8 board)
  }
  