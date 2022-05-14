// Styles
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


// Vuetify
import { createVuetify } from 'vuetify'
import { ThemeDefinition } from 'vuetify'

// Themes
const darkTheme = {
  dark: true,
  colors: {
    background: '#112A45',
    primary: '#111D2C',
    accent: '#65B7F3',
    text: '#FFFFFF'
  }
}

export default createVuetify({
    icons: {
      defaultSet: 'mdi',
    },
    theme: {
      defaultTheme: 'darkTheme',
      themes: {
        darkTheme
      }
    }
  }
)

