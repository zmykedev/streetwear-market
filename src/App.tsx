import React from 'react'
import './App.css'
import { Navbar } from './components/ui/Navbar/navbar'
import { ModeToggle } from './components/ui/mode-toggle'
import { Sidebar } from './components/ui/Sidebar/sidebar'
import { ThemeProvider } from './components/ui/theme-provider'
import { CarouselDemo } from './components/ui/Carousel/carousel'

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Navbar />
            <Sidebar />
            {/* <ModeToggle /> */}
            <div className="flex justify-center mt-24">
                <CarouselDemo />
            </div>
        </ThemeProvider>
    )
}

export default App
