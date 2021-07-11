class Header {
    constructor() {
        this.topbar = document.querySelector('#topbar')
        this.menuContainer = document.querySelector('#mainMenu')
        this.menuSidebar = this.menuContainer.querySelector('#mainSidebar')
        const openMenuBtnContainer = this.topbar.querySelector('#openMenuBtn')
        this.openMenuBtn = openMenuBtnContainer.querySelector('.open')
        let topCloseButtons = openMenuBtnContainer.querySelectorAll('.close')
        this.closeMenuIcon = openMenuBtnContainer.querySelector('.close')

        this.isOpen = false
    }

    init() {
        this.openMenuBtn.addEventListener('click', this._openMenu.bind(this))
        this.closeMenuIcon.addEventListener('click', this._closeMenu.bind(this))
        document.body.addEventListener('scroll', this._onBodyScroll.bind(this))
        this.menuContainer.addEventListener('click', this._onContainerClick.bind(this))
    }

    _openMenu() {
        this.menuContainer.classList.remove('hidden')
        this.menuContainer.classList.add('block')

        document.body.classList.add('overflow-hidden', 'relative')

        this.openMenuBtn.classList.add('hidden')
        this.openMenuBtn.classList.remove('block')

        this.closeMenuIcon.classList.add('block')
        this.closeMenuIcon.classList.remove('hidden')

        this.isOpen = true
    }

    _closeMenu() {
        this.menuContainer.classList.add('hidden')
        this.menuContainer.classList.remove('block')

        document.body.classList.remove('overflow-hidden', 'relative')

        this.openMenuBtn.classList.add('block')
        this.openMenuBtn.classList.remove('hidden')

        this.closeMenuIcon.classList.add('hidden')
        this.closeMenuIcon.classList.remove('block')

        this.isOpen = false
    }

    _onBodyScroll() {
        if (this.isOpen) {
            this._closeMenu()
        }
    }

    _onContainerClick(e) {
        if (this.isOpen && !this.menuSidebar.contains(e.target) && !this.closeMenuIcon.contains(e.target)) {
            this._closeMenu()
        }
    }
}

export default Header