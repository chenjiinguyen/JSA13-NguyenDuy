let key = "cart";
let btns = document.querySelectorAll(".button-add");
let result = document.querySelector(".cart-list");

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click",function(){
        let value = btns[i].getAttribute("value");
        // Thực hiện quá trình thêm todo vào LocalStorage
        let todo_storage = []
        // Lấy dữ liệu từ LocalStorage (dạng String JSON)
        let arr_string = localStorage.getItem(key);
        // Xem nó có tồn tại hay không ??
        if( arr_string != null)
        {
            // Nếu có thì chuyển từ String JSON sang Array
            todo_storage = JSON.parse(arr_string);
        }
        // Thêm dữ liệu vào Array
        todo_storage.push(value);
        // Chuyển Array thành String JSON
        arr_string = JSON.stringify(todo_storage);
        // Lưu dữ liệu String JSON vào LocalStorage
        localStorage.setItem(key,arr_string);
        Render();
    });
}

Render();


// Lấy dữ liệu từ LocalStorage thành dạng List HTML (UL LI)
function Render(){
    // Thực hiện quá trình thêm todo vào LocalStorage
    let todo_storage = []
    // Lấy dữ liệu từ LocalStorage (dạng String JSON)
    let arr_string = localStorage.getItem(key);
    // Xem nó có tồn tại hay không ??
    if( arr_string != null)
    {
        // Nếu có thì chuyển từ String JSON sang Array
        todo_storage = JSON.parse(arr_string);
    }
    // Xóa dữ liệu của Result
    result.innerHTML = "";

    for(let i = 0; i < todo_storage.length;i++){
        let li = document.createElement("li");
        li.innerHTML = todo_storage[i];
        result.appendChild(li);
    }
}