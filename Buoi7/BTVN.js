/**
 * ax^2 + bx + c = 0
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @returns Array
 */
let PTB2 = (a, b, c) => {
  let result = [];
  let delta = b ** 2 - 4 * a * c;
  if (delta < 0) {
    // Phương trình vô nghiệm
  } else if (delta == 0) {
    // Phương trình có 1 nghiệm
    let x1 = (-b / 2) * a;
    result = [x1];
  } else {
    // Phương trình có 2 nghiệm phân biệt
    let x1 = ((-b + Math.sqrt(delta)) / 2) * a;
    let x2 = ((-b - Math.sqrt(delta)) / 2) * a;
    result = [x1, x2];
  }
  return result;
};

let res = PTB2(1, 2, -3);

switch (res.length) {
  case 0:
    console.log("Phương trình vô nghiệm");
    break;

  case 1:
    console.log("Phương trình có 1 nghiệm");
    break;

  case 2:
    console.log("Phương trình có 2 nghiệm phân biệt");
    break;

  default:
    break;
}
