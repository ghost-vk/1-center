export const initFaq = () => {
    const container = document.querySelectorAll('section.faq')

    if (!container) {
        return
    }

    const toggle = (row) => {
        if (typeof row.querySelector !== 'function') {
            return
        }
        let icon = row.querySelector('svg')
        let body = row.parentNode.querySelector('.faqItemBody')
        if (!icon || !body) {
            return
        }
        icon.classList.toggle('transform')
        icon.classList.toggle('rotate-45')
        if (body.classList.contains('max-h-0')) {
            body.classList.remove('max-h-0', 'mt-0')
            body.classList.add('max-h-max', 'mt-3')
        } else {
            body.classList.remove('max-h-max', 'mt-3')
            body.classList.add('max-h-0', 'mt-0')
        }
    }

    for (let i = 0, max = container.length; i < max; i += 1) {
        let items = container[i].querySelectorAll('.faqItem')
        if (!items) {
            continue
        }
        for (let j = 0, maxJ = items.length; j < maxJ; j += 1) {
            let row = items[j].querySelector('.faqItemOpen')
            if (!row) {
                continue
            }
            row.addEventListener('click', () => toggle(row))
        }
    }
}