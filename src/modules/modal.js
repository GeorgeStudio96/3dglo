const modal = () => {
    const popupBtn = document.querySelectorAll('.popup-btn')
    const popup = document.querySelector('.popup')
    const popupClose = popup.querySelector('.popup-close')
    const width = document.documentElement.clientWidth




    const modalAnimationOpen = () => {
        popup.style.opacity = 1;
        popup.style.transition = "opacity 1s";
    }
    const modalAnimationClose = () => {
        popup.style.opacity = 0;
        popup.style.transition = "opacity 1s";
    }
    const popupHide = () => {
        popup.style.display = 'none'
    }


    const clientWidthMax = () => {
        popup.style.opacity = 0

        popupBtn.forEach(item => {
            item.addEventListener('click', () => {
                popup.style.display = 'block'
                setTimeout(modalAnimationOpen, 100)
            })
        })

        popupClose.addEventListener('click', () => {
            modalAnimationClose()
            setTimeout(popupHide, 1000)
        })
    }

    const clientWidthMin = () => {
        console.log('меньше 576');

        popupBtn.forEach(item => {
            item.addEventListener('click', () => {
                popup.style.display = 'block'
            })
        })

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none'
        })
    }


    if (width > 576) {
        clientWidthMax()
    } else {
        clientWidthMin()
    }

    window.addEventListener('resize', () => {

        if (width > 576) {
            clientWidthMax()
        } else {
            clientWidthMin()
        }
    })

}

export default modal