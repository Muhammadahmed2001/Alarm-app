var date = document.getElementById("date")
var time = document.getElementById("time")
date.innerHTML = moment().format('Do MMMM YYYY');




setInterval(() => {
    time.innerHTML = moment().format('h:mm:ss a')
}, 1000);