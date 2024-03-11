import React from 'react'
import './App.css'
import { ThemeProvider } from './components/ui/theme-provider'
import { ModeToggle } from './components/ui/mode-toggle'
import { HeroSection } from './components/hero'
import { Skills } from './components/skills'
import { Shortcut } from './components/shortcut'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Experience } from './components/experience'

function App() {
    React.useEffect(() => {
        AOS.init()
    }, [])

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <HeroSection />

            <Skills />
            <Experience />
            <Shortcut />

            <ModeToggle />
        </ThemeProvider>
    )
}

export default App
