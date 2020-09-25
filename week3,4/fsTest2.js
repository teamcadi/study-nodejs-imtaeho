const fs = require('fs');

// // i/o 메서드
// // 비동기 non-blocking (안 기다림)
// fs.readFile('test.txt', { encoding: 'utf-8' }, (err, read) => {
//   if (err) console.error(err.message);
//   console.log(err, read);
// });

let read;
try {
  read = fs.readSync('test.txt'); // 디비 연결
  fs.unlinkSync('test.txt'); // 디비 sql
} catch (err) {}
