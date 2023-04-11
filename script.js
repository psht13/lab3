$(document).ready(function() {
  var board = $('#board');
  var squares = [];
  var queen = null;

  for (var i = 0; i < 8; i++) {
    var row = $('<div>').appendTo(board);
    squares[i] = [];
    for (var j = 0; j < 8; j++) {
      var square = $('<div>').addClass('square').appendTo(row);
      squares[i][j] = square;
      if ((i + j) % 2 == 0) {
        square.addClass('white');
      } else {
        square.addClass('black');
      }
      square.attr('data-row', i);
      square.attr('data-col', j);
      square.click(function() {
        var row = $(this).attr('data-row');
        var col = $(this).attr('data-col');
        if (queen == null) {
          queen = { row: row, col: col };
          squares[row][col].text('♛');
          highlightMoves(row, col);
        } 
        else {
          squares[queen.row][queen.col].text('');
          queen = { row: row, col: col };
          squares[row][col].text('♛');
          highlightMoves(row, col);
        }
      });
    }
  }

  function highlightMoves(row, col) {
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        if (i == row || j == col || Math.abs(i - row) == Math.abs(j - col)) {
          squares[i][j].addClass('highlight');
        } else {
          squares[i][j].removeClass('highlight');
        }
      }
    }
    
    for (var i = 0; i < 8; i++) {
      if (i != row) {
        squares[i][col].addClass('highlight');
  }
  if (i != col) {
    squares[row][i].addClass('highlight');
  }
}

var i = row - 1;
var j = col - 1;
while (i >= 0 && j >= 0) {
  squares[i][j].addClass('highlight');
  i--;
  j--;
}
i = row - 1;
j = col + 1;
while (i >= 0 && j < 8) {
  squares[i][j].addClass('highlight');
  i--;
  j++;
}
i = row + 1;
j = col - 1;
while (i < 8 && j >= 0) {
  squares[i][j].addClass('highlight');
  i++;
  j--;
}
i = row + 1;
j = col + 1;
while (i < 8 && j < 8) {
  squares[i][j].addClass('highlight');
  i++;
  j++;
}
}
});