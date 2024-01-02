
const start = document.getElementById('start');
let stop = document.querySelector('#stop');
let resert = document.querySelector('#resert');
let timer = document.querySelector('#timer');


start.addEventListener('click', () =>{
    start.classList.toggle('blueshow');
})


stop.addEventListener('click', () =>{
    stop.classList.toggle('redshow')
})


function updateTimer(){
    future = Date.parse("jun 12, 2022 01:15:00");
    now = Date.parse("jun 12, 2022 01:00:00");
    diff = future - now;

    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    s = secs - mins * 60;

    timer.innerHTML = + " " + mins + ":" + s 

}

updateTimer();
