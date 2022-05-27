// setTimeout(() =>{
//     console.log("1")
// },1000)
// console.log("отправка данных...")

// setTimeout(() => {
//     console.log("подготовка данных...")
//     const product
// })


// req.then(product) => {
//     const req2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product,status = "ordered";
//             console.log(product);
//             resolve(product);
//         }, 2000);
//     });
//
//     req2.then((product) => {
//         product.isModified = true;
//         console.log(product)
//     })
// }

//
// const req = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         console.log("подготовка данных...");
//         const product = {
//             name: "Phone",
//             pice: "4000",
//         };
//         resolve();
//     }, 2000);
// });
//
// req.then((product) => {
//     return new = Promise ((resolve, reject) => {
//         setTimeout(() => {
//             product.status = "ordered";
//             console.log(product, "1");
//             resolve(product);
//         }, 2000);
//     });
// })
// .then((product) => {
//     product.isModified = true;
//     console.log(product, "2");
// });

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));