const menu = function () {

    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menu.addEventListener('click', (e) => {
        if (e.target.closest('ul>li>a') || e.target.classList.contains('close-btn')) {
            handleMenu()
        }
    })

    menuBtn.addEventListener('click', handleMenu)
}



export default menu