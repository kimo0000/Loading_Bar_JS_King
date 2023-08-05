// const percent = document.getElementById("load_percent");
// const range = document.querySelector('input');
// // console.log(range.value)
// let counter = 0;
// let count = null;

// console.log(range)

// window.onload = getRange();

// function getRange() {
//     setInterval(() => {
//         range.step = 5;
//         range.value = counter++;
//         precent.innerText = range.value + "%";
//     }, 10)
    
//     clearInterval(count);
// }

const percent = document.getElementById("load_percent");
const bar = document.querySelector('.bar');
const loadings = bar.querySelector('.loading');

let index = 0;


function updateBar() {
    percent.innerText = index + "%";
    loadings.style.width = index++ + "%";

         if (index < 101) {
            setTimeout(updateBar, 20);
        }
}

updateBar();

        



