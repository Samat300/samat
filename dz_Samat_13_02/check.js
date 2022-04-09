let goOn = true;
let counter = 0;
let arrOne = [];
while(goOn==true){
    arrOne[counter] = prompt("Введите значение для элемента " + counter + " первого массива");
    counter+=1;
    goOn = confirm("Продолжить?");
}
counter = 0;
goOn=true;
let arrTwo = [];
while(goOn==true){
    arrTwo[counter] = prompt("Введите значение для элемента " + counter + " второго массива");
    counter+=1;
    goOn = confirm("Продолжить?");
}
console.log("Первый массив имеет длину в " + arrOne.length + " .Второй - в " + arrTwo.length)
if(arrOne.length > arrTwo.length){
    console.log("Первый массив больше второго по длине")
} else if (arrOne.length < arrTwo.length){
    console.log("Первый массив меньше второго по длине")
} else {
    console.log("Массивы равны по длине")
}