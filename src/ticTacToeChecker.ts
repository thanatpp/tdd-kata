export function isSolved(board: number[][]) {
  const result = checkLinearWinner(board);
  if (result) {
    return result;
  }

  if (
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2] &&
    board[0][0] + board[1][1] + board[2][2] > 0
  ) {
    return board[0][0];
  }

  if (
    board[2][0] === board[1][1] &&
    board[2][0] === board[0][2] &&
    board[2][0] + board[1][1] + board[0][2] > 0
  ) {
    return board[2][0];
  }

  if (board.flat().filter((n) => n === 0).length > 0) {
    return -1;
  }

  return 0;
}

function checkLinearWinner(board: number[][]) {
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i] &&
      board[0][i] + board[1][i] + board[2][i] > 0
    ) {
      return board[0][i];
    }

    if (
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2] &&
      board[i][0] + board[i][1] + board[i][2] > 0
    ) {
      return board[i][0];
    }
  }
}
