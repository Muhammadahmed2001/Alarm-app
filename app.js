var date = document.getElementById("date");
var time = document.getElementById("time");
date.innerHTML = moment().format("Do MMMM YYYY");
time.innerHTML = moment().format("h:mm:ss a");

var htmlTime = "";
var amPm = "";
var notification = false;
setInterval(() => {
  time.innerHTML = moment().format("h:mm:ss a");
  //   htmlTime = moment(time.innerHTML, "h:mm:ss a").format("hh:mm:ss a");
  console.log(time.innerHTML.slice(0, 8) === amPm.slice(0, 8));
}, 1000);

var inputTime = document.getElementById("input-time");

var alarmName = document.getElementById("alarm-name");
var timeList = document.getElementById("time-list");
var listNo = 0;

var getTime = () => {
  listNo++;
  amPm = moment(inputTime.value, "hh:mm").format("hh:mm:ss a");
  if(alarmName.value && inputTime.value  !== ""){
      timeList.innerHTML += `
        <tr>
        <th scope="row">${listNo}</th>
        <td>${alarmName.value}</td>
        <td>${amPm.slice(0,5)+ amPm.slice(8)}</td>
        </tr>
        `;
        inputTime.value = "";
        alarmName.value = "";
    }else{
        Swal.fire({
            title: "The warning?",
            text: "Enter tha both value",
            icon: "warning"
          });
   
    }
    

  //   console.log(amPm);
  // if()

  // console.log("======> time " + inputTime.value , "======> date " + dateInput.value , "======> name " + alarmName.value)
};
