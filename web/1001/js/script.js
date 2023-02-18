let finalNumber;

// make all number 6 digits long
function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

// random number then change the dom element
function randomNumber() {
    var number = Math.floor(Math.random() * 1000000);
    document.getElementById('number').innerHTML = pad(number, 6);
}
randomNumber();

// set final number
function finalNumberFunction() {
    var number = Math.floor(Math.random() * 1000000);
    finalNumber = number;
    document.getElementById('realnumber').innerHTML = pad(number, 6);
}
finalNumberFunction();

// get button element by id and add event listener
document.getElementById('add').addEventListener('click', function () {
    // get number element
    var number = document.getElementById('number');
    // get current number
    var current = parseInt(number.innerHTML);
    // add 1000 to current number
    number.innerHTML = current + 1000;
    // check local storage
    var number = document.getElementById('number').innerHTML;
    if (number == finalNumber) {
        stopper();
        document.getElementById('number').innerHTML = `You Win with a time of ${format(finalTime)}sec!`;
        popUp();
    }
});

// when keyboard a is pressed
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 65) {
        // get number element
        var number = document.getElementById('number');
        // get current number
        var current = parseInt(number.innerHTML);
        // add 1000 to current number
        number.innerHTML = current + 1000;
        // check local storage
        var number = document.getElementById('number').innerHTML;
        if (number == finalNumber) {
            stopper();
            document.getElementById('number').innerHTML = `You Win with a time of ${format(finalTime)}sec!`;
            popUp();
        }
    }
});

// get button element by id and add event listener
document.getElementById('remove').addEventListener('click', function () {
    // get number element
    var number = document.getElementById('number');
    // get current number
    var current = parseInt(number.innerHTML);
    // remove 1000 to current number
    number.innerHTML = current - 1000;
    // check local storage
    var number = document.getElementById('number').innerHTML;
    if (number == finalNumber) {
        stopper();
        document.getElementById('number').innerHTML = `You Win with a time of ${format(finalTime)}sec!`;
        popUp();
    }
});

// when keyboard s is pressed
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 83) {
        // get number element
        var number = document.getElementById('number');
        // get current number
        var current = parseInt(number.innerHTML);
        // remove 1000 to current number
        number.innerHTML = current - 1000;
        // check local storage
        var number = document.getElementById('number').innerHTML;
        if (number == finalNumber) {
            stopper();
            document.getElementById('number').innerHTML = `You Win with a time of ${format(finalTime)}sec!`;
            popUp();
        }
    }
});

// get button element by id and add event listener
function randomNumberButton() {
    var number = Math.floor(Math.random() * 1000000);
    document.getElementById('number').innerHTML = pad(number, 6);
    // check local storage
    var number = document.getElementById('number').innerHTML;
    if (number == finalNumber) {
        stopper();
        document.getElementById('number').innerHTML = `You Win with a time of ${format(finalTime)}sec!`;
        popUp();
    }
}

// when keyboard hit enter
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        var number = Math.floor(Math.random() * 1000000);
        document.getElementById('number').innerHTML = pad(number, 6);
        // check local storage
        var number = document.getElementById('number').innerHTML;
        if (number == finalNumber) {
            stopper();
            document.getElementById('number').innerHTML = `You Win with a time of ${format(finalTime)}sec!`;
            popUp();
        }
    }
});

// popUp
function popUp() {
    alert(`You win with a time of ${format(finalTime)}sec!`);

    window.location.reload();
}

// stopwatch
let time = 0;
let finalTime;
let Interval;

// stop stopwatch
const stopper = () => {
    finalTime = time;
    clearInterval(Interval)
    time = 0;
}

// format time
const format = (time) => {
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

// start stopwatch
Interval = setInterval(() => {
    starter();
}, 10);

// start stopwatch pt 2
const starter = async () => {
    time++;
}