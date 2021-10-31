/**
 * Tính diện tích hình tròn
 * @author chenjinguyen
 * @param Number r : bán kính
 * @returns Number
 */
function dtht(r){
    return r**2 * Math.PI;
}

//DOM

let articles = document.querySelectorAll(".article__header");
for (const article of articles) {
    let link = article.querySelector("a");
    console.log(article.innerText,link.href);
}

//Event - DOM
let h1 = document.querySelectorAll("h1");
for (let i = 0; i < h1.length; i++) {
    h1[i].addEventListener("click",() => {
        alert(this.innerText);
    });
    h1[i].style.color = "red";
}

// let & const
let a = 0;

const b = 12;


//ES5
function ABC(a,b){
    return a+b;
}

let ABCD = function(a,b){
    return a+b;
}

//ES6
// Arrow Function
let ABCD = (a,b) => { return a+b; }

// Chú Ý 1:
// Nếu có 1 tham số, thì bỏ đi "(" và ")"
let AAA = a => {return a*2;}

// Chú Ý 2:
// Nếu trong block return về giá trị luôn, xóa "return" và "{" và "}"
let AAA = (a,b) => a+b;

// Chú Ý 3:
// Nếu muốn trả về dạng Object ghi vào dấu ngoặc tròn "(" , ")"
let ABBB = (a,b) => ({a: a, b:b});