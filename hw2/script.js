//1
function j (count){
    let result = "";
    for (let i = 1; i <= count; i++){
        for (let j = 0; j < i; j++){
            result += "*"
        }
        result += '\n';
    }
    return result
}
console.log(j(800))