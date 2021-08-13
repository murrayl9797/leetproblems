/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  // Initialize rows array and curr row pointer
  const rows = [];
  let currRow = 0;
  let ascending = true;

  // Iterate over string
  for (let char of s) {
      // Add char to row
      if (!rows[currRow]) {
          rows[currRow] = char;
      } else {
          rows[currRow] = rows[currRow] + char;
      }

      // Update row pointer
      if (numRows === 1) {

      } else if (ascending) {
          // If going up and not at bottom, keep going
          if (currRow < numRows - 1) {
              currRow++;
          // If currRow = numRows, flip it
          } else {
              ascending = false;
              currRow--;
          }
      } else {
          if (currRow > 0) {
              currRow--;
          } else {
              ascending = true;
              currRow++;
          }
      }
  }

  // Finally append rows
  let result = '';
  for (let row of rows) {
      result += row;
  }

  // Return result
  return result;
};


console.log(`Answer:`, convert('AB', 1))