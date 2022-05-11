const phoneInput = document.querySelector(".phoneInput");
const phoneClick = document.getElementsByClassName("phoneClick");
const phoneResult = document.querySelector(".phoneResult");



const phoneValidate = /2\d{14}$/;

phoneClick[0].addEventListener("click", () => {
    if (phoneValidate.test(phoneInput.value)){
        phoneResult.innerText = "ok";
        phoneResult.style.color = "blue";
    } else{
        phoneResult.innerText = "not ok";
        phoneResult.style.color = "red";
    }
});

const vip = document.getElementsByClassName('vip');
const button = document.getElementsByClassName('button')

let num = 0;
function right(){
    num++
    if (vip[0].style.left !== '1700px'){
        vip[0].style.left = num + "px"
        return right()
    }

}
button[0].addEventListener('click', right)



