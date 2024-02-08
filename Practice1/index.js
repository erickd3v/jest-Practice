console.log("Ruleta");

console.log(Math.round(Math.random() * 36));

let price = ["10", "20", "50"];

let numberRandom = Math.round(Math.random() * 36);

// Ingresando número para la ruleta

function userSelect(number) {
  // Function para verificar el precio
  function game(pen) {
    console.log(price[0]);
  }
  if (number !== numberRandom) {
    console.log(numberRandom);
    console.log("you louse");
    console.log(game());
  } else {
    console.log(numberRandom);
    console.log("you win");
  }
}
