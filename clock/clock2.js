let time = document.getElementById('time');
let date = document.getElementById('date');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

setInterval(() => {
    let a = new Date();
    let h = a.getHours();

    if (h>12){
        h = h-12;
    }

    let m = a.getMinutes();
    let s = a.getSeconds();
    let d = a.getDate();
    let mo = a.getMonth();
    let y = a.getFullYear();

    date.innerText = `${d}-${mo}-${y}`
    hour.innerText = `${h}`
    minute.innerText = `${m}`
    second.innerText = `${s}`

    // console.log= `${h} : ${m} : ${s}   ${d}-${mo}-${y}`;
}, 1000);
