
function showimage() {
const dayImage = document.getElementById('day-image')
const nightImage = document.getElementById('night-image')
dayImage.style.display = 'none'
nightImage.style.display = 'none'
    const newDate = new Date()
    const hours =  newDate.getHours()
    const minutes = newDate.getMinutes()
    const seconds = newDate.getSeconds()
    if(hours > 6 && hours < 18 ){
        dayImage.style.display = 'block'
    }
    else{
        nightImage.style.display = 'block'
    
    }
}
showimage()
setInterval(showTime,500)
function showTime(){
    let time = document.getElementById('time')
    let newDate = new Date()
    let hours =  newDate.getHours()
    let minutes = newDate.getMinutes()
    let seconds = newDate.getSeconds()
    let currentTime = hours+':'+minutes+':'+seconds
    time.innerHTML = currentTime
    if(hours > 12 ) {
        hours = hours - 12;
    }
    if (hours == 0){
        hours = 12;
    }
    if (hours < 10){
        hours = '0'+ hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
}
// showTime()