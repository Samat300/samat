const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const tech = document.getElementById('tech')

let num = 0;
plus.onclick = () => {
    num++
    tech.innerText = num
}
minus.onclick = () => {
    num--
    if ( num < 1){
        num = 0
    }
    tech.innerText = num
}


