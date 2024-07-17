

import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './containers/AppRoutes'
import { theme } from './styles/MuiTheme'
import './styles/globals.css'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
