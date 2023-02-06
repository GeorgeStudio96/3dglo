const modal = () => {
    const popupBtn = document.querySelectorAll('.popup-btn')
    const popup = document.querySelector('.popup')
    const popupClose = popup.querySelector('.popup-close')


    popup.style.opacity = 0

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

    if (window.matchMedia("(min-width: 768px)").matches) {
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
}

export default modal