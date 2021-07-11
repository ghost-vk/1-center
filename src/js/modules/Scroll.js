import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill()

class ScrollToObject {
    constructor() {
        this.elements = document.querySelectorAll('.scrollToElement')
    }

    init() {
        for (let i = 0, max = this.elements.length; i < max; i += 1) {
            const el = this.elements[i]
            const id = el.getAttribute('data-anchor-id')
            const topPosition = el.getAttribute('data-position')
            if (topPosition) { // absolute position is set
                this.elements[i].addEventListener('click', () => {
                    window.scroll({ top: topPosition, left: 0, behavior: 'smooth' } )
                })
            } else if (id) { // relative element is set
                const reference = document.querySelector('#' + id)
                this.elements[i].addEventListener('click', () => {
                    reference.scrollIntoView({behavior: 'smooth'})
                })
            }
        }
    }
}

export default ScrollToObject