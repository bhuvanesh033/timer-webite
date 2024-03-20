
var seconds = 0;
var interval;
var minute = 0;
var hour = 0;
const gettime = (num) => num.toString().padStart(2, '00');
function startBtnClick() {

    interval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minute++;
            seconds = 0;
        }
        if (minute === 60) {
            hour++;
            minute = 0;
        }
        document.getElementById("timer").innerText = `${gettime(hour)}:${gettime(minute)}:${gettime(seconds)}`;
    },1000);
}

function stopBtnClick() {
    clearInterval(interval);

}
function resetBtnClick() {
    stopBtnClick();
    seconds = 0;
    minute = 0;
    hour = 0;
    document.getElementById("timer").innerHTML = `${gettime(hour)}:${gettime(minute)}:${gettime(seconds)}`
}
function flagBtnClick() {
    const eventName = document.getElementById("event-name").value;
    const eventDuration = document.getElementById("timer").innerText;
    const newRow = document.createElement("tr");
    const eventNameCell = document.createElement("td");
    eventNameCell.textContent = eventName;
    const durationCell = document.createElement("td");
    durationCell.textContent = eventDuration;
    newRow.appendChild(eventNameCell);
    newRow.appendChild(durationCell);
    document.getElementById("event-records").appendChild(newRow);
}
function clearBtnClick(){
    var Table = document.getElementById("event-records");
Table.innerHTML = "";
alert("you are clearing all the laps");
}