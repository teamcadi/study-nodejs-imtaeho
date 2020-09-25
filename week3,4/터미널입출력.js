const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inp;
readline.on('line', (input) => {
  inp = input;
  console.log('내가 입력한 것은? ', input);
  logic();
});

// 로직
function logic() {
  const list = inp.split('');
  console.log(list);
}
