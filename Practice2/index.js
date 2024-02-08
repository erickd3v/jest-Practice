let cadena =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis enim culpa et perspiciatis quisquam illo dignissimos. Laudantium labore temporibus ullam nisi nulla mollitia, quasi provident consectetur ipsum doloremque repudiandae. Facilis!";

let expReg = new RegExp("lorem", "ig"); // option 1
console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

let expReg2 = /lorem{1}/gi; // option 2
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));
