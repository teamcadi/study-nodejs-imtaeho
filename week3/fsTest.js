const fs = require('fs');

// i/o 메서드
// 비동기 non-blocking (안 기다림)
fs.readFile('test.txt', { encoding: 'utf-8' }, (err, read) => {
  if (err) console.error(err.message);
  console.log(err, read);
});

// 동기 blocking (기다림)
let syncRead;
try {
  syncRead = fs.readFileSync('testt.txt', { encoding: 'utf-8' });
} catch (err) {
  console.error(err.message);
}
console.log(1);
console.log(syncRead);
