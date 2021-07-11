import Glide from '@glidejs/glide'

const initSlider = () => {
    const serviceReviews = document.querySelector('#reviews #reviewsGlide')
    if (serviceReviews) {
        new Glide(serviceReviews, {
            classes: { activeNav: 'bg-blue-400' },
            perView: 1
        }).mount()
    }
}

export default initSlider