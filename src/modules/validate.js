const validate = () => {
    console.log('calc');

    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    const inputText = document.querySelectorAll('input[type=text]')
    const inputEmail = document.querySelectorAll('input[type=email]')
    const inputTel = document.querySelectorAll('input[type=tel]')



    const validateInputOnlyNumber = (e) => {
        e.target.value = e.target.value.replace(/\D+/, '')
    }

    const validateInputText = (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я -]+$/i, '') // только ру + дефис и пробел
    }

    const validateEmail = (e) => {
        e.target.value = e.target.value.replace(/[^ A-Za-z @-_.!~*']$/, '')
    }

    const validatePhone = (e) => {
        e.target.value = e.target.value.replace(/[^0-9()]$/, '')
    }


    calcSquare.addEventListener('input', validateInputOnlyNumber)
    calcCount.addEventListener('input', validateInputOnlyNumber)
    calcDay.addEventListener('input', validateInputOnlyNumber)
    inputText.forEach(item => item.addEventListener('input', validateInputText)
    )
    inputEmail.forEach(item => item.addEventListener('input', validateEmail))
    inputTel.forEach(item => item.addEventListener('input', validatePhone))



}

export default validate