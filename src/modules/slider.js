const slider = () => {
    console.log('slider');
    const potrfolioContent = document.querySelector('.portfolio-content')
    const potrfolioItems = document.querySelectorAll('.portfolio-item')
    const dotsWrapper = document.querySelector('.portfolio-dots')

    const dotsAdded = () => {
        for (let i = 0; i < potrfolioItems.length; i++) {
            const newDot = document.createElement('li')
            newDot.classList.add('dot')
            dotsWrapper.append(newDot)
        }
    }
    dotsAdded()

    const dots = document.querySelectorAll('.dot')
    console.log(dots);


    let currentSlide = 0;
    let interval
    let timerInterval = 2000


    const startSlide = (timerInterval) => {
        interval = setInterval(autoSlide, timerInterval)
    }




    const autoSlide = () => {
        prevSlide(potrfolioItems, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')
        currentSlide++

        if (currentSlide >= potrfolioItems.length) {
            currentSlide = 0
        }

        nextSlide(potrfolioItems, currentSlide, 'portfolio-item-active')
        nextSlide(dots, currentSlide, 'dot-active')

    }



    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)

    }

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    const stopSlide = () => {
        clearInterval(interval)
    }



    potrfolioContent.addEventListener('click', (e) => {
        e.preventDefault()

        if (!e.target.matches('.dot, portfolio-btn')) {
            return
        }

        prevSlide(potrfolioItems, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')

        if (e.target.matches('#arrow-right')) {
            console.log('arrow-right');
            currentSlide++
        } else if (e.target.matches('#arrow-left')) {
            console.log('arrow-left');
            currentSlide--
        } else if (e.target.classList.contains('dot'))
            console.log('dot');
        dots.forEach((dot, index) => {
            if (e.target === dot) {
                currentSlide = index
            }
        })

        if (currentSlide >= potrfolioItems.length) {
            currentSlide = 0
        }
        if (currentSlide < 0) {
            currentSlide = potrfolioItems.length - 1
        }

        nextSlide(potrfolioItems, currentSlide, 'portfolio-item-active')
        nextSlide(dots, currentSlide, 'dot-active')
    })


    potrfolioContent.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide()
        }
    }, true)

    potrfolioContent.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timerInterval)
        }
    }, true)

    startSlide(timerInterval)


}


export default slider