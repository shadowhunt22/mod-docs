import DefaultTheme from 'vitepress/theme'
import ChoiceComponent from "./components/FeaturesComponent.vue"
import ImageComponent from "./components/ImageComponent.vue"
import './styles/style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ChoiceComponent', ChoiceComponent)
    app.component('ImageComponent', ImageComponent)
  }
}