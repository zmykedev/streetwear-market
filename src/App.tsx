import React from 'react'
import './App.css'
import { Navbar } from './components/ui/Navbar/navbar'
import { ModeToggle } from './components/ui/mode-toggle'
import { Sidebar } from './components/ui/Sidebar/sidebar'
import { ThemeProvider } from './components/ui/theme-provider'
import { CarouselDemo } from './components/ui/Carousel/carousel'
import center from './assets/centerimage.webp'

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Navbar />
            <Sidebar />
            {/* <ModeToggle /> */}
            <div className="flex justify-center mt-24">
                <CarouselDemo />
            </div>
            <div className=" flex justify-center mt-4">
                <img
                    className="rounded-xl"
                    width={360}
                    src={center}
                    alt="new"
                />
            </div>
        </ThemeProvider>
    )
}

export default App
