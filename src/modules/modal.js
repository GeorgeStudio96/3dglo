import animate from "./animate"

const modal = () => {

    const popupBtn = document.querySelectorAll('.popup-btn')
    const popup = document.querySelector('.popup')
    const popupClose = popup.querySelector('.popup-close')



    popupBtn.forEach(item => {
        item.addEventListener('click', () => {
            popup.style.display = 'block'
        })
    })

    popupClose.addEventListener('click', () => {
        animate({
            duration: 1000,
            timing: function (timeFraction) {
                return timeFraction;
            },
            draw: function (progress) {
                popup.style.display = 'none'
                popup.style.opacity = progress / 100 + '%';
            }
        })
    })


    window.addEventListener('resize', () => {
        if (window.innerWidth > 700) {
            popupBtn.forEach(item => {
                item.addEventListener('click', () => {
                    animate({
                        duration: 1000,
                        timing: function (timeFraction) {
                            return timeFraction;
                        },
                        draw: function (progress) {
                            popup.style.display = 'block'
                            popup.style.opacity = progress * 100 + '%';
                        }
                    })
                })
            })


        }
    })


}

export default modal