function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s; //Add Time to id="time"
    var t = setTimeout(startTime, 500);
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("date").innerHTML = m + "•" + d + "•" + y; //Add Date to id="date"
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
setInterval(() => {
    document.title = new Date().toLocaleTimeString(); //Update title tag
}, 1);