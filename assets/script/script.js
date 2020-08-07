let hourHand = document.querySelector(".hour-hand");
let minHand = document.querySelector(".min-hand");
let secondHand = document.querySelector(".second-hand");

function clock() {
    let day = new Date();
    let hour = day.getHours();
    let minute = day.getMinutes();
    let second = day.getSeconds();

    const rotireOra = 30;
    let pozOra = (hour * rotireOra) + 90;
    hourHand.style.transform = `rotate(${pozOra}deg)`;

    const rotireMin = 6;
    let pozMinut = (minute * rotireMin) + 90;
    minHand.style.transform = `rotate(${pozMinut}deg)`;

    const rotireSecunda = 6;
    let pozSecunda = (second * rotireSecunda) + 90;
    secondHand.style.transform = `rotate(${pozSecunda}deg)`;

}
setInterval(clock, 1000);
clock();