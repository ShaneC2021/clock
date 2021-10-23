let sec = 0;
let minute = 0;
let hour = 0;


function time() {
  const d = new Date();
  sec = d.getSeconds();
  minute = d.getMinutes();
  hour = d.getHours();

   
  
  if(hour >= 12)
    document.getElementById("ampm").innerText = "PM";         // displays pm if hour >= 12 
  else 
    document.getElementById("ampm").innerText = "AM";         
  
  if(hour === 0) 
    document.getElementById("hours").innerText = hour + 12;   // removes 24 hr clock at midnight
  
  
  if(hour > 12) 
    document.getElementById("hours").innerText = hour - 12 ;  // removes 24 hr clock notation after 12pm
  else 
    document.getElementById("hours").innerText = hour;        
  
  if(minute < 10)
    document.getElementById("minutes").innerText = `0${minute}`;
  else 
    document.getElementById("minutes").innerText = minute;
  
  if(sec < 10) 
    document.getElementById("seconds").innerText = `0${sec}`;
  else
    document.getElementById("seconds").innerText = sec;
}