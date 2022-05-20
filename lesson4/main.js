// const obj = {
//     name: "John",
//     age: "20",
// };
// console.log(obj);
//
// const data = JSON.stringify(obj);
// console.log(data);
//
// console.log(JSON.parse(data));


// const num = 5;
//
// let num2 = num + 10;
//
// console.log(num);
// console.log(num2)
//
//
// const obj = {
//     name: "Alex",
//     num: "+996509985555"
// };
//
// const obj2 = { ...obj };
// obj2.name = "John";
//
// console.log(obj);
// console.log(obj2);


let http = require("http");

http
    .createServer((request, response) =>{
        response.writeHead(200,{"Content-Type": "text/plain"});
        response.end("Hello world");
    })
    .listen(8081);

console.log("Server runnig at http.//127.0.0.1.8081")
