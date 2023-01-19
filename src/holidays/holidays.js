const greeting = document.querySelector('.greeting')
const day = document.querySelector('.day')
const currentTime = document.querySelector('.current-time')
const dayCount = document.querySelector('.day-count')
const dayText = document.querySelector('.day-text')



const greetingFunc = function (deadline) {

    let timesOfDay = [
        'Доброе утро',
        'Добрый день',
        'Добрый вечер',
        'Доброй ночи'
    ]


    let days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ]

    let dayCorrect = [
        'день',
        'дня',
        'дней'
    ]



    const getCurrentTime = () => {

        let date = new Date()
        console.log(date, ' Дата')

        let hours = date.getHours();
        if (hours < 10) {
            hours = '0' + date.getHours()
        }
        console.log(hours);
        let minute = date.getMinutes();
        if (minute < 10) {
            minute = '0' + date.getMinutes();
        }
        console.log(minute);
        let second = date.getSeconds();
        if (second < 10) {
            second = '0' + date.getSeconds()
        }
        console.log(second);


        let result = hours + ':' + minute + ':' + second
        return result
    }

    const currentDay = () => {

        let date = new Date()
        console.log(date, ' Дата')

        let day = date.getDay();
        console.log(day, ' День недели число');

        result = days[day]
        console.log(result);
        return result

    }

    const setGreeting = () => {
        let date = new Date()
        console.log(date);
        let hours = date.getHours();
        console.log(hours);
        let result

        if (hours < 18) {
            result = timesOfDay[1]
        } else if (18 > hours < 24) {
            result = timesOfDay[2]
        } else if (24 > hours < 6) {
            result = timesOfDay[3]
        } else {
            result = timesOfDay[0]
        }
        return result

    }

    const getTimeRemaning = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()


        let timeRemaning = (dateStop - dateNow) / 1000
        let days = Math.ceil(timeRemaning / 60 / 60 / 24)

        return days
    }


    const dayRemaning = () => {

        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()


        let timeRemaning = (dateStop - dateNow) / 1000
        let days = Math.ceil(timeRemaning / 60 / 60 / 24)

        let dayRemaning


        if (days % 10 === 1) {
            dayRemaning = dayCorrect[0]
        } else if (days % 10 === 2 || (days % 10 === 3) || (days % 10 === 4)) {
            dayRemaning = dayCorrect[1]
        } else {
            dayRemaning = dayCorrect[2]
        }

        return dayRemaning
    }



    currentTime.innerHTML = getCurrentTime()
    day.innerHTML = currentDay()
    greeting.innerHTML = setGreeting()
    dayCount.innerHTML = getTimeRemaning()
    dayText.innerHTML = dayRemaning()

}





setInterval(greetingFunc, 1000, '8 march 2023')
