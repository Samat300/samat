// console.log(document)

const block = document.getElementsByClassName('block');
console.log(block)

const block3 = document.getElementsByClassName('block3')
// console.log(block3)

// block3.className = 'changedClass'
// console.log(block3.classList)

// block3.classList.add('changedList')
// block3.classList.remove('new')

// block3.oncLick = () => {
//     block3.classList.toggle('active')
// }

// const block = document.querySelector('.block');
// const blocks1 = document.querySelector('.block');
// console.log(blocks1)

const button = document.getElementById('button');
const input = document.getElementById('input');

button.onclick = () =>{
    const div = document.createElement('div');
    div.setAttribute('class', 'block');
    div.innerText = input.value;
    document.body.append(div);

    const deleteText = document.createElement('button');
    deleteText.setAttribute('class', 'block');
    deleteText.innerText = "delete";
    document.body.append(deleteText);


    deleteText.onclick = () =>{
        div.remove()
        deleteText.remove()
    }




}