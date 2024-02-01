import { ThemeProvider } from '@emotion/react'
import Navigation from './components/Navigation'
import ExperiencesPage from './pages/Experiences'
import LandingPage from './pages/Landing'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

function App() {
  return (
    /* Everything is rendered within Material-ui's ThemeProvider, which gives styling to its elements */
    <ThemeProvider theme={theme}>
      
      {/* CssBaseline simply imports css that normalizes all the browsers to look similarly */}
      <CssBaseline />

      {/* BrowserRouter wraps the content that should change based on path or should be able to navigate between paths */}
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/experiences" element={<ExperiencesPage/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projects" element={<Projects/>} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
