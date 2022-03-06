// Query Selector
function query (elem) {
    return document.querySelector(elem);
}

// Set Terminal Time
var date = new Date( Date.now() - 1000 * 60 * 60 * 4 ).toUTCString(),
    weekday = date.slice(0, 3),
    day = date.slice(5, 7),
    month = date.slice(8, 11),
    time = date.slice(17, 25);


query('time').innerHTML = weekday + ' ' + month + ' ' + day + ' ' + time;
