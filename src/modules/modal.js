import animate from "./animate"

const modal = () => {

    const popupBtn = document.querySelectorAll('.popup-btn')
    const popup = document.querySelector('.popup')
    const popupClose = popup.querySelector('.popup-close')

    popupClose.addEventListener('click', () => {
        popup.style.display = 'none'
        popup.style.opacity = '0';
    })

    popupBtn.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth < 700) {
                popup.style.display = 'block'
                popup.style.opacity = '1';
            } else {
                popup.style.display = 'block'
                animate({
                    duration: 1000,
                    timing: function (timeFraction) {
                        return timeFraction;
                    },
                    draw: function (progress) {
                        popup.style.opacity = progress;
                    }
                })
            }
        })
    })
}

export default modal


