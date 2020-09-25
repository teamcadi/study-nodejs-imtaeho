// // new Promise(executor);
// // executor(resolve, reject);
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('2초 끝');
//   }, 2000);
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .then()
//   .then();

// console.log('1');

const fetchNum = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNum
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num / 2), 1000);
    });
  })
  .then(console.log);
