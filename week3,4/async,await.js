// 인터프린터 방식 언어

function myTimer(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time}ms 걸림`);
    }, time);
  });
}

// 무분별한 await 사용 시 병목이 발생할 수 있음
// Promise.all
async function main() {
  console.time('main');

  // const str1 = await myTimer(3000); // 3 -> t1
  // const str2 = await myTimer(4000); // 4 -> t2
  // const str3 = await myTimer(2000); // 2 -> t3

  const arr = await Promise.all([myTimer(1000), myTimer(3000), myTimer(2000)]);
  // express-validator
  console.log(arr);
  // 여기서는 동기화가 필요
  console.timeEnd('main');
}

main();
