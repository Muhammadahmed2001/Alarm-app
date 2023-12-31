if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => {
        console.log("service worker registered")
        Notification.requestPermission().then(res=>{
          if(Notification.permission=='granted'){
              console.log("Granted permission")
              return
          }
          console.log(res)
      })
    })
      .catch(err => console.log("service worker not registered", err))
  })
} 





var date = document.getElementById("date");
var time = document.getElementById("time");
date.innerHTML = moment().format("Do MMMM YYYY");
time.innerHTML = moment().format("h:mm:ss a");
var inputTime = document.getElementById("input-time");
var alarmName = document.getElementById("alarm-name");
var timeList = document.getElementById("time-list");

var htmlTime = "";
var amPm = "";
var notification = false;
setInterval(() => {
  time.innerHTML = moment().format("hh:mm:ss a");
  //   htmlTime = moment(time.innerHTML, "h:mm:ss a").format("hh:mm:ss a");
  // console.log(time.innerHTML.slice(0, 8) , amPm.slice(0, 8));
  if(time.innerHTML.slice(0, 8) === amPm.slice(0, 8)){
    navigator.serviceWorker.ready.then((alert)=>{
      var option = {
        body:"Today at " + amPm.slice(0,5) + amPm.slice(8),
        icon:"/assets/icons/icon-512x512.png"
        

        
      };
      alert.showNotification("AK'Reminder" , option)
    })
  }






  
}, 1000);
// navigator.serviceWorker.ready.then((alert)=>{
//   var option = {
//     body:"Today at " + amPm.slice(0,5) + amPm.slice(8),
//     icon:"/assets/icons/icon-512x512.png"
    

    
//   };
//   alert.showNotification(alarmName.value,option)
// })




var listNo = 0;

var getTime = () => {
  amPm = moment(inputTime.value, "hh:mm").format("hh:mm:ss a");
  if(alarmName.value && inputTime.value  !== ""){
    listNo++;
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
