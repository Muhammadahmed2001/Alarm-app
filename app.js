var date = document.getElementById("date")
var time = document.getElementById("time")
date.innerHTML = moment().format('Do MMMM YYYY');
time.innerHTML = moment().format('h:mm:ss a')

setInterval(() => {
    time.innerHTML = moment().format('h:mm:ss a')
}, 1000);


var inputTime = document.getElementById("input-time")
var dateInput = document.getElementById("date-input")
var alarmName = document.getElementById("alarm-name")
var amPm = ""

var getTime = () =>{
    
    // if()
    

// console.log("======> time " + inputTime.value , "======> date " + dateInput.value , "======> name " + alarmName.value)
}
