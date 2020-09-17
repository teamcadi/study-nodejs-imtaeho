// function add1(input, callback) {
//   setTimeout(() => callback(input + 1), 1000);
// }

function add1(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(input + 1), 1000);
  });
}

add1(0)
  .then((result) => add1(result))
  .then((result) => {
    console.log(result);
  });

// add1(0, (result) => {
//   add1(result, (result) => {
//     add1(result, (result) => {
//       add1(result, (result) => {
//         add1(result, (result) => {
//           add1(result, (result) => {
//             add1(result, (result) => {
//               console.log(result);
//             });
//           });
//         });
//       });
//     });
//   });
// });
