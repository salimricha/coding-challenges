var keyboardWords = function (words) {
  let keyboardButtons = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  let output = [];
  for (var keyboardButton of keyboardButtons) {
    for (var word of words) {
      let sign= true;
      for (var letter of [...word]) {
        if (!keyboardButton.includes(letter.toLowerCase())) {
          sign = false;
          break;
        }
      }
      if (sign == true){

       output.push(word);
    }}
  }
  return output;
};
console.log(keyboardWords(["Hello","Alaska","Dad","Peace"] ));
console.log(keyboardWords(["qwerty","gshsd","gqeas"] ));

