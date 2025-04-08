import { ThemeProvider } from 'styled-components'

import { RegisterPage } from './pages'
import { theme } from './styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RegisterPage />
    </ThemeProvider>
  )
}

export default App
