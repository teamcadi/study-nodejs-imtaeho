function scanner() {
  const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve, reject) => {
    rl.on('line', (result) => {
      resolve(result);
      rl.close();
    });
  });
}

// const main = async () => {}
async function main() {
  const num1 = Number(await scanner());
  const num2 = Number(await scanner());
  console.log(num1 + num2);
}

main();
