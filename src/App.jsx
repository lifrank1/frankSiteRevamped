import { ThemeProvider } from '@emotion/react'
import Navigation from './components/Navigation'
import ExperiencesPage from './pages/Experiences'
import LandingPage from './pages/Landing'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/experiences" element={<ExperiencesPage/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
