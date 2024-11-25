const input = document.getElementById("input");
const f = document.getElementById("f");
const c = document.getElementById("c");
const result = document.getElementById("result");
let temp;

function fnc() {
    if (f.checked) {
        temp = Number(input.value);
        temp = ((9 / 5) * temp) + 32;
        result.textContent = temp.toFixed(1)+" F";
    }
    else if (c.checked) {
        temp = Number(input.value);
        temp = (5 / 9) * (temp - 32);
        result.textContent = temp.toFixed(1)+" C";
    }
    else {
        result.textContent = "Chooose ONE";
    }
}