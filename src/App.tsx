
import './App.css'
import { ThemeProvider } from './components/ui/theme-provider'
import MainPage from './pages/main/MainPage'

function App() {
  return (
    <>
    <ThemeProvider>
       <MainPage/>
      </ThemeProvider>
    </>
  )
}

export default App
