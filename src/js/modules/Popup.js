import {list} from 'postcss'

const axios = require('axios')

class Popup {
    constructor() {
        this.container = document.querySelector('#price')
        this.modal = document.querySelector('#priceModal')

        this.button = this.container.querySelector('button')

        this.closeBtn = this.modal.querySelector('#priceModalCloseBtn')
        this.priceModalBody = this.modal.querySelector('#priceModalBody')

        this.titleContainer = this.priceModalBody.querySelector('#priceModalTitle')
        this.rowsContainer = this.priceModalBody.querySelector('#priceRowsContainer')
        this.modalListsContainer = this.priceModalBody.querySelector('#pricePopupListsContainer')
        this.notesContainer = this.priceModalBody.querySelector('#pricePopupNotesContainer')
        this.infoContainer = this.priceModalBody.querySelector('#priceModalInfo')

        this.listContainer = this.container.querySelector('#priceListContainer')

        this.rulesContainer = this.modal.querySelector('#rulesContainer')

        this.isListOpen = false
        this.isModalOpen = false
    }

    init() {
        this._addListeners()
    }

    _addListeners() {
        this.button.addEventListener('click', this._handleButton.bind(this))

        const links = this.listContainer.querySelectorAll('.openPriceItem')
        for (let i = 0, max = links.length; i < max; i += 1) {
            links[i].addEventListener('click', this._onLinkClick.bind(this))
        }

        this.modal.addEventListener('click', this._onModalClick.bind(this))
        this.closeBtn.addEventListener('click', this._closeModal.bind(this))

        const showRulesBtn = document.querySelectorAll('.showRulesBtn')
        for (let i = 0, max = showRulesBtn.length; i < max; i += 1) {
            showRulesBtn[i].addEventListener('click', this._showRules.bind(this))
        }
    }

    _fetch(filename) {
        if (typeof filename !== 'string') {
            return
        }

        filename = `/store/${filename}`

        this._openModal()

        axios(filename)
            .then((response) => {
                this._openModal()

                if (response.status !== 200) {
                    console.log('Error in fetch data price')
                    this._showError()

                    return null
                }

                this._buildPriceModal(response.data)
                this.infoContainer.classList.remove('hidden')
            })
            .catch((e) => {
                this._showError()
                this.infoContainer.classList.add('hidden')
            })
    }

    _buildPriceModal(data) {
        const title = data.title ? data.title : 'Прайс-лист'
        this.titleContainer.innerHTML = data.title

        this._buildRows(data.rows)
        this._buildLists(data.lists)
        this._buildNotes(data.notes)
    }

    _buildRows(rows) {
        if (typeof rows === 'undefined') {
            return
        }

        let response = ''

        const commonContainerClasses = 'w-full flex justify-between items-center px-2 '
        const headingClasses = 'bg-blue-200 py-2 md:py-4 md:text-lg font-semibold '
        const defaultContainerClasses = 'py-1 '

        const getRow = (classes, first = '', second = '', third = '') => {

            return `<div class="${classes}">
                        <div class="w-1/2 pr-1">
                            ${first}
                        </div>
                        <div class="w-1/4 px-1">
                            ${second}
                        </div>
                        <div class="w-1/4 pl-1">
                            ${third}
                        </div>
                    </div>`
        }

        for (let i = 0, max = rows.length; i < max; i += 1) {
            let containerClasses = rows[i].isHeading ? commonContainerClasses + headingClasses
                : commonContainerClasses + defaultContainerClasses

            if (!rows[i].isHeading) {
                let bg = i % 2 !== 0 ? 'bg-blue-100' : 'bg-green-50'
                containerClasses += bg
            }

            let row = getRow(containerClasses, rows[i].first, rows[i].second, rows[i].third)

            response += row
        }

        this.rowsContainer.innerHTML = response
    }

    _buildNotes(notes) {
        if (typeof notes === 'undefined') {
            return null
        }

        let notesData = ''

        const getNoteTemplate = (text = '') => {
            return `<div class="text-lg font-semibold mb-4">
                        ${text}
                    </div>`
        }

        for (let i = 0, max = notes.length; i < max; i += 1) {
            let template = getNoteTemplate(notes[i])
            notesData += template
        }

        if (notesData) {
            this.notesContainer.innerHTML = notesData
        }
    }

    _buildLists(lists) {
        if (typeof lists === 'undefined') {
            return
        }

        let listsData = ''

        const getListTemplate = (title = '', rows = []) => {
            if (!title && !rows) {
                return ''
            }

            let li = ''
            for (let i = 0, max = rows.length; i < max; i += 1) {
                let el = rows[i] ? `<li>${ rows[i] }</li>` : ''
                li += el
            }

            return `<div class="mb-4">
                        <div class="text-lg font-semibold mb-2">${title}</div>
                        <div class="w-full h-px bg-blue-300 mb-2"></div>
                        <ul class="list-inside list-disc">
                            ${li}
                        </ul>
                    </div>`
        }

        for (let i = 0, max = lists.length; i < max; i += 1) {
            let template = getListTemplate(lists[i].title, lists[i].ul)

            listsData += template
        }

        if (listsData) {
            this.modalListsContainer.innerHTML = listsData
        }
    }

    _showError() {
        this.titleContainer.innerHTML = 'Возникла ошибка, попробуйте перезагрузить страницу'
    }

    _clearModal() {
        this.titleContainer.innerHTML = 'Загрузка ...'
        this.rowsContainer.innerHTML = ''
        this.modalListsContainer.innerHTML = ''
        this.notesContainer.innerHTML = ''
    }

    _closeModal() {
        // close
        this.modal.classList.add('hidden')
        this.modal.classList.remove('flex')

        this.isModalOpen = false

        document.body.classList.remove('overflow-hidden', 'relative')

        // clear
        this._clearModal()

        // Hide rules
        if (!this.rulesContainer.classList.contains('hidden')) {
            this.rulesContainer.classList.add('hidden')
        }
    }

    _openModal() {
        this.modal.classList.add('flex')
        this.modal.classList.remove('hidden')

        document.body.classList.add('overflow-hidden', 'relative')

        this.isModalOpen = true
    }

    _showRules() {
        this._openModal()
        this.rulesContainer.classList.remove('hidden')
        this.titleContainer.innerHTML = 'Правила работы сервисного центра'
    }

    _handleButton() {
        const show = () => {
            this.listContainer.classList.add('max-h-max')
            this.listContainer.classList.remove('max-h-0')
        }

        const hide = () => {
            this.listContainer.classList.add('max-h-0')
            this.listContainer.classList.remove('max-h-max')
        }

        this.isListOpen ? hide() : show()

        this.isListOpen = !this.isListOpen
        this.button.innerText = this.isListOpen ? 'Скрыть цены' : 'Показать цены'
    }

    _onModalClick(e) {
        if (this.isModalOpen && !this.priceModalBody.contains(e.target)) {
            this._closeModal()
        }
    }

    _onLinkClick(e) {
        const filename = e.target.getAttribute('data-filename')

        if (typeof filename === 'undefined') {
            return null
        }

        this._fetch(filename)
    }
}

export default Popup