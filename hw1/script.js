
const child = document.getElementsByClassName('child');
const move = document.getElementsByClassName('moved')

let num = 0;
function right(){
    num++
    if (child[0].style.left !== '1700px'){
        child[0].style.left = num + "px"
        return right()
    }

}
move[0].addEventListener('click', right)

