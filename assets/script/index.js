'use strict';

const callSound = new Audio(' ./assets/audio/calls.mp3');
callSound.type = 'audio/mp3';


const setAlarm = document.querySelector('.set');
const clock = document.querySelector('.clock');
const output = document.querySelector('.output');
const time = document.querySelector('.time');

function print(args) {
  console.log(args);
}

function formatTime(date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function updateTime() {
  const now = new Date();
  clock.innerHTML = formatTime(now);
};
 
// Call updateTime() every second
setInterval(updateTime, 1000);

// check if current time matches set time
setInterval(() => {
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const setHours = parseInt(output.innerHTML.split(':')[0]);
  const setMinutes = parseInt(output.innerHTML.split(':')[1]);
  if (currentHours === setHours && currentMinutes === setMinutes) {
    callSound.play();
  }
}, 100);


//validation time 

const timeFormat = /^([01]\d|2[0-3]):([0-5]\d)$/;

setAlarm.addEventListener('click', () => {
  const timeString = time.value;
  if (timeFormat.test(timeString)) {
    output.innerHTML = timeString;
    time.value = '';
  } else {
    output.innerHTML = "Invalid time format";
  }
});


