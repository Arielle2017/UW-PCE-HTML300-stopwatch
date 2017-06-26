//button controls
const start = document.querySelector("button.start") //through out DOM, looking for a button that has a class name "start"
const stop = document.querySelector("button.stop")
//look things in DOM to match "button.stop" --> looking for a button that has a class cnname "stop"
const lap = document.querySelector("button.lap") //through out DOM, looking for a button that has a class name "start"
const reset = document.querySelector("button.reset")

//DOM elements that I need to update
const laplist = document.querySelector("#laplist") // looking for an ID "slaplist"
const stopwatchTime = document.querySelector("#stopwatchTime")

//constants that should not ever change
const laps =[]
const intervalRate = 10 //update the stopwatch every 10 milliseconds

//values that will change pretty often
let intervalId = null // no value yet, it is just a place holder for now
let rawTime = 0






//start the stopwatch by creating a new interval
//store interval ID so we can manupulate it later
function stopwatchStart(event){
  event.preventDefault()
  console.log("Started!")

  //every 10 millisecons, update the stopwatch
  intervalId = setInterval (stopwatchUpdate, intervalRate)
  //have a callback which has not been written yet (created below)
}


//adds the interval to the stopwatch time since the last "tick"
//then update the DOM with the new stopwatch time
function stopwatchUpdate() {
  rawTime +=intervalRate
  stopwatchTime.innerHTML = formatTime(rawTime)
  //update the DOM with this stopwatchTime variable
}
// turns the time into a human readable format
function formatTime (raw) {
  let seconds = Math.floor(raw / 1000)
  let fractionalSeconds = (raw % 1000) / 1000
  let minutes = Math.floor(seconds / 60)
  seconds = seconds - (60 * minutes) + fractionalSeconds

  return `${zeroPad(minutes)}:${zeroPad(seconds.toFixed(2))}`
}



//clears the interval to stop the stopwatch
function stopwatchStop(event) {
event.preventDefault()
console.log("Stopped!")

clearInterval(intervalId)
}


function stopwatchLaps(event) {
  event.preventDefault()
  laps.push(rawTime)
    //laplist.innerHTML = listUpdate()
      for(i=0; i<laps.length; i++) {
        var laplast = laps[laps.length - 1]
    console.log("lapped at: " + formatTime(laplast))
  }
}


function stopwatchReset(event) {
event.preventDefault()
rawTime = 0
stopwatchTime.innerHTML = formatTime(rawTime)
console.log("Resetted!")
}

//NOT SURE WHAT THIS BELOW BLOCK OF CODE IS FOR??
// adds a leading zero because humans like them
function zeroPad (value) {
  let pad = value < 10 ? '0' : ''
  return `${pad}${value}`
}







document.addEventListener("DOMContentLoaded", function () {
  console.log('ready!')

  start.addEventListener("click", stopwatchStart) //callback stopwatchStart
   stop.addEventListener("click", stopwatchStop)
   lap.addEventListener("click", stopwatchLaps)
   reset.addEventListener("click", stopwatchReset)
})
