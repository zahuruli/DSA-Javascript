let totalApple = 0;
let money = 100;
let applePrice = 10;
function buyApple(x) {
  if (x > 0) {
    console.log(`I have Money: ${x} Apple: ${totalApple} `);
    buyMore(x);
  } else {
    console.log(
      `I dont have more money to buy any apple . Total apple :${totalApple}`,
    );
  }
}

function buyMore(x) {
  totalApple++;
  buyApple(x - applePrice);
}

buyApple(money);
