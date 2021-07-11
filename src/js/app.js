import Header from './modules/Header'
import ScrollToObject from './modules/Scroll'
import {initFaq} from './modules/Faq'
import initSlider from "./modules/Slider"
import Popup from "./modules/Popup"

const header = new Header()
header.init()

const scroll = new ScrollToObject()
scroll.init()

const popup = new Popup()
popup.init()

initFaq()

initSlider()