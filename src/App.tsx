import './App.css'
import { ThemeProvider } from './components/ui/theme-provider'
import { ModeToggle } from './components/ui/mode-toggle'
import { HeroSection } from './components/hero'

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <HeroSection></HeroSection>
            <ModeToggle />
        </ThemeProvider>
    )
}

export default App
