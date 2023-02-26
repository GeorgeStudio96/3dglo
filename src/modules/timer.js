const timer = (deadline) => {

    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-second')


    const getTimeRemaning = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()

        let timeRemaning = (dateStop - dateNow) / 1000

        let hours = Math.floor(timeRemaning / 60 / 60)
        if (hours < 10) {
            hours = '0' + Math.floor(timeRemaning / 60 / 60)
        }
        let minutes = Math.floor((timeRemaning / 60 % 60))
        if (minutes < 10) {
            minutes = '0' + Math.floor((timeRemaning / 60 % 60))
        }
        let seconds = Math.floor(timeRemaning % 60)
        if (seconds < 10) {
            seconds = '0' + Math.floor(timeRemaning % 60)
        }
        return { timeRemaning, hours, minutes, seconds }
    }




    const updateClock = () => {
        let getTime = getTimeRemaning()
        timerHours.textContent = getTime.hours
        timerMinutes.textContent = getTime.minutes
        timerSeconds.textContent = getTime.seconds

        if (getTime.timeRemaning > 0) {
            console.log('проверка setInterval');
        } else {
            timerHours.innerHTML = '00'
            timerMinutes.innerHTML = '00'
            timerSeconds.innerHTML = '00'
            clearInterval(timerID)
        }
    }

    let timerID = setInterval(updateClock, 1000)



    updateClock()

}


export default timer