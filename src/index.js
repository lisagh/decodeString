/*
Amazon OA 2021 Hackerrank
Decode the input string into original string.

*/

function decodeString(numberOfRows, encodedString) {
  let res = [];
  let length = encodedString.length;
  let row_len = Math.floor(length / numberOfRows);

  let i = 0,
    count = 0;
  while (i < length) {
    let cur = encodedString[i];

    if (cur === "_") {
      res.push(" ");
    } else {
      res.push(cur);
    }
    count++;
    let col = Math.floor(count / numberOfRows);
    let row = count % numberOfRows;
    i = row * row_len + row + col;
  }
  return res.join("");
}

console.log(decodeString(3, "mnesi___ya__k____mime"));
