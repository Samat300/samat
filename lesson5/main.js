const som = document.querySelector("#som");
const usd = document.querySelector("#usd");

// som.addEventListener("input", ()=> {
//     const request = new XMLHttpRequest();
//     request.open("GET", "paskage.js");
//     request.setRequestHeader("Contend-type", "application/json");
//     request.send();
//     request.addEventListener("load", ()=>{
//         const request = JSON.parse(request.response);
//         console.log(request.response);
//         usd.value =(som.value/response.usd).toFixed(2);
//     });
// });

const convert = (elem, target, isTrue) => {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest();
        request.open("GET", "package.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();

        request.addEventListener("load",()=>{
            const response = JSON.parse(request.response);
            if (isTrue) {
                target.value = (elem.value / response.usd).toFixed(2);
            } else{
                target.value = (elem.value * response.usd).toFixed(2);
            }
            elem.value === "" ? (target.value = "") : null;
        });
    });
};

convert(som, usd, 12);
// "" ,NaN, false, null, undef

convert(usd, som);