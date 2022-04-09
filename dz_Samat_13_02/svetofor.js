const green = "Зелёный. Двигаемся.";
const yellow = "Жёлтый. Смотрим...";
const red = "Красный. Стоим!";
let switcher = 0;

while(true){
    switch (switcher%3) {
    case 1:
        alert(green);
        break;
    case 2:
        alert(yellow);
        break;
    case 0:
        alert(red);
        break;
    }
    switcher+=1;
}