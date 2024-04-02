import React, { useRef } from 'react'
import './App.css'
import { ThemeProvider } from './components/ui/theme-provider'
import { ModeToggle } from './components/ui/mode-toggle'
import { HeroSection } from './components/hero'
import { Skills } from './components/skills'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Experience } from './components/experience'
import { MenuBar } from './components/ui/Menu/menu'
import { Contact } from './components/contact'
import { Proyects } from './components/proyects'
import { Worker } from '@react-pdf-viewer/core'

function App() {
    const homeRef = useRef(null)
    const skillsRef = useRef(null)
    const experienceRef = useRef(null)
    const contactRef = useRef(null)

    React.useEffect(() => {
        AOS.init()
    }, [])

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <div className="flex flex-col gap-y-20">
                    <HeroSection ref={homeRef} />

                    <Skills ref={skillsRef} />
                    <Experience ref={experienceRef} />
                    <Proyects />
                    <Contact ref={contactRef} />
                    <MenuBar
                        sectionRefs={{
                            home: homeRef,
                            skills: skillsRef,
                            experience: experienceRef,
                            contact: contactRef,
                        }}
                    />
                </div>
                <ModeToggle />
            </ThemeProvider>
        </Worker>
    )
}

export default App
