import animate from "./helpers"

const modal = () => {

    const popupBtn = document.querySelectorAll('.popup-btn')
    const popup = document.querySelector('.popup')

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

    popup.addEventListener('click', (e) => {
        console.log(e.target.closest('.popup-content'));
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            popup.style.display = 'none'
            popup.style.opacity = '0';
        }
    })
}

export default modal


