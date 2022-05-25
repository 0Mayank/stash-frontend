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
    background: '#24163A',
    primary: '#1A1325',
    accent: '#928BE6',
    text: '#FFFFFF'
  }
}

export default createVuetify({
  theme: {
      defaultTheme: 'darkTheme',
      themes: {
        darkTheme
      }
    }
  }
)

