const mass = [1, 2, 3, 4, 5,];
const mass2 = [68, 77, 86, 92, 93, 10,];
const mass3 = [12, 35, 36, 29, 55,];
const mass4 = [55, 84, 33, 92];
const mass5 = [46, 53, 535,  335,];
const mass6 = [...mass,...mass2,...mass3,...mass4,...mass5];
console.log(mass6);


/*************************/
const obj = {
    name: "Samat",
    last_name:"Keneshov",
    height: 163,
    age: 24,
    gender:"male"

}
const obj2 = {
    ...obj,
    family:"none",
    address: "Suyunbaeva 41",
    gmail: "keneshovsamat300@gmail.com"

}


const list = []
const input = document.getElementById("input");
const addButton = document.getElementById("button");

function render() {
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "list");

    for (let i = 0; i < list.length; i ++){
        const div = document.createElement("div");
        div.setAttribute("class", "todoBlock");
        const p = document.createElement("p");
        p.innerText = list[i].text;
        div.append(p)

        const buttons = document.createElement("div");
        buttons.setAttribute("class", "actions");
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "delete");
        deleteButton.innerText = "delete";
        buttons.append(deleteButton);
        div.append(buttons);
        mainDiv.append(div);
    }
    const form = document.querySelector('.form');
    form.append(mainDiv);

}
addButton.onclick = function () {
    const obj = {
        id: list.length+1,
        text: "Hello" + input.value,
    }
    list.push(obj)
    console.log(list);
    render();
}
