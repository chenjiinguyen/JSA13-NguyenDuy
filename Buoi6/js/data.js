let products = [
    {
        name: "KFC Chizza Free",
        des: "KFC tung món ăn độc đáo lần đầu tiên xuất hiện tại Việt Nam",
        img: "https://www.simplemost.com/wp-content/uploads/2017/02/chizza.jpg",
    },
    {
        name: "KFC Pizza",
        des: "KFC tung món ăn độc đáo lần đầu tiên xuất hiện tại Việt Nam",
        img: "https://www.simplemost.com/wp-content/uploads/2017/02/chizza.jpg",
    },
    {
        name: "KFC Chizza Free",
        des: "KFC tung món ăn độc đáo lần đầu tiên xuất hiện tại Việt Nam",
        img: "https://www.simplemost.com/wp-content/uploads/2017/02/chizza.jpg",
    },
    {
        name: "KFC Chizza Free",
        des: "KFC tung món ăn độc đáo lần đầu tiên xuất hiện tại Việt Nam",
        img: "https://www.simplemost.com/wp-content/uploads/2017/02/chizza.jpg",
    },
    {
        name: "KFC Chizza Free",
        des: "KFC tung món ăn độc đáo lần đầu tiên xuất hiện tại Việt Nam",
        img: "https://www.simplemost.com/wp-content/uploads/2017/02/chizza.jpg",
    },
    {
        name: "KFC Chizza Free",
        des: "KFC tung món ăn độc đáo lần đầu tiên xuất hiện tại Việt Nam",
        img: "https://www.simplemost.com/wp-content/uploads/2017/02/chizza.jpg",
    },
]

let menu = document.querySelector(".menu");
menu.innerHTML = ""

for(let i = 0;i < products.length; i++){
    let p = products[i];
    menu.innerHTML += `
    <div class="item">
        <div class="product-view">
            <img class="product-img" src="${p.img}">
            <button class="button-add" value="${p.name}">Add to Cart</button>
        </div>
        <div class="product-content">
            <h3>${p.name}</h3>
            <p>
                ${p.des}
            </p>
        </div>
    </div>`;

    
}

