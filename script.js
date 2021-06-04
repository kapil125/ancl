const hourHandle = document.getElementById("hour");
const minuteHandle = document.getElementById("minute");
const secondHandle = document.getElementById("second");


setInterval(clockHandlesManager, 100);

function clockHandlesManager() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  hour = hour - 12;
  hourHandle.style.transform = `translate(-8.5rem,-.5rem) rotateZ(${(hour-12)*30}deg)`;
  if(minute > 5 && minute <= 15) {
    hourHandle.style.transform = `translate(-8.5rem,-.5rem) rotateZ(${(hour-12)*30 + 7.5}deg)`;
  }else if(minute > 15 && minute <= 30) {
      hourHandle.style.transform = `translate(-8.5rem,-.5rem) rotateZ(${(hour-12)*30 + 15}deg)`;
  }else if(minute > 30 && minute <= 45) {
      hourHandle.style.transform = `translate(-8.5rem,-.5rem) rotateZ(${(hour-12)*30 + 22.5}deg)`;
  }else if(minute > 45 && minute <= 57) {
      hourHandle.style.transform = `translate(-8.5rem,-.5rem) rotateZ(${(hour-12)*30 + 25}deg)`;
  }else if(minute > 59 && minute <= 60) {
      hourHandle.style.transform = `translate(-8.5rem,-.5rem) rotateZ(${(hour-12)*30 + 29}deg)`;
  }
  minuteHandle.style.transform = `translate(-8.48rem,-.5rem) rotateZ(${minute * 6}deg)`;
  secondHandle.style.transform = `translate(-8.5rem,-.5rem) rotateZ(${second * 6}deg)`;
}
