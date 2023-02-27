const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка'
    const errorText = 'Ошибка'
    const successText = 'Успешная отправка'



    const validate = (list) => {
        let success = true

        return success
    }

    const sendData = async (data) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            // }
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await res.json()
    }

    const submitForm = () => {
        const formElems = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)


        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach(item => {
            const elem = document.getElementById(item.id)
            if (item.type === 'block') {
                formBody[item.id] = elem.textContent
            } else if (elem.type === 'input') {
                formBody[item.id] = elem.value
            }
        })


        if (validate(formElems)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText
                    formElems.forEach(item => {
                        item.value = ''
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            alert('Данные не валидны')
        }
    }


    try {
        if (!form) {
            throw new Error('Верните форму на место')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            submitForm()
        })
    } catch (error) {
        console.log(error.message)
    }

}

export default sendForm