// 인터프린터 방식 언어

function myTimer(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 2000) {
        reject(new Error('2초가 넘어서 에러를 발생시킵니다'));
      } else resolve(`${time}ms 걸림`);
    }, time);
  });
}

async function main() {
  try {
    const str = await myTimer(3000);
    console.log(str);
    console.log('메인 함수 실행');
  } catch (error) {
    console.error(error.message);
  }
}

main();
