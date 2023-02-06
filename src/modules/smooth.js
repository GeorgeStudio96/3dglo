const smooth = () => {
    const anchors = document.querySelectorAll('a[href*="#"]')


    anchors.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            const blockID = item.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    })
}



export default smooth