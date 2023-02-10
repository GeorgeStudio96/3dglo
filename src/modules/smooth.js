const smooth = () => {
    const anchors = document.querySelectorAll('a[href*="#"]')

    const search = 'close';
    const elem = Array.from(document.querySelectorAll('a')).find(el => el.href.includes(search));

    console.log(elem);


    if (!elem) {
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

}



export default smooth