const menu = function () {

    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = document.querySelectorAll('ul>li>a')

    console.log(menuBtn);
    console.log(menu);
    console.log(menuItems)

    const closeMenu = () => {
        if (!menu.style.transform) {
            menu.style.transform = `translateX(0)`
        } else {
            menu.style.transform = ``
        }
    }

    menuBtn.addEventListener('click', () => {
        closeMenu()

        closeBtn.addEventListener('click', () => {
            closeMenu()
        })


        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener('click', () => {
                closeMenu()
            })
        }

    })

}

export default menu