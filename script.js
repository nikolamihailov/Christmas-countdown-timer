function time() {

    const timeNow = new Date();
    const timeNewYear = new Date("2022-12-25");

    const differenceInSeconds = (timeNewYear - timeNow) / 1000;

    const days = Math.floor(differenceInSeconds / 3600 / 24);
    const hours = Math.floor(differenceInSeconds / 3600) % 24 - 2;
    const minutes = Math.floor(differenceInSeconds / 60) % 60;
    const seconds = Math.floor(differenceInSeconds) % 60;



    document.getElementById("days").innerHTML = format(days);
    document.getElementById("hours").innerHTML = format(hours);
    document.getElementById("minutes").innerHTML = format(minutes);
    document.getElementById("seconds").innerHTML = format(seconds);



}

function format(time) {

    if (time < 10) {
        time = "0" + time;
        return time;
    }
    else {
        return time;
    }

}

time();


setInterval(time, 1000);


