import { Button } from '../button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../tooltip'

import { Menubar, MenubarMenu } from '@/components/ui/menubar'
import { useTheme } from '../theme-provider'
import {
    Home,
    TerminalSquare,
    Briefcase,
    MailPlus,
    PanelsTopLeft,
} from 'lucide-react'
import './index.css'

interface MenuProps {
    sectionRefs: {
        home: React.RefObject<HTMLElement>
        skills: React.RefObject<HTMLElement>
        experience: React.RefObject<HTMLElement>
        proyects: React.RefObject<HTMLElement>
        contact: React.RefObject<HTMLElement>
    }
}

export const MenuBar: React.FunctionComponent<MenuProps> = ({
    sectionRefs,
}) => {
    const { theme } = useTheme()
    const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
        if (ref?.current) {
            const yOffset = -70
            const y =
                ref.current.getBoundingClientRect().top +
                window.scrollY +
                yOffset
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }

    const color = theme === 'dark' ? 'color-7' : 'color-8'
    return (
        <TooltipProvider>
            <Menubar className="fixed flex h-14 justify-center space-x-5 bottom-0 left-0 right-0 mx-auto bg-white dark:bg-black shadow-lg p-5">
                <MenubarMenu>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                className={`text-white h-12 bg-transparent btn-hover ${color} `}
                                onClick={() => {
                                    scrollToSection(sectionRefs.home)
                                }}
                            >
                                <Home />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-800 dark:bg-white  text-white  dark:text-black">
                            <p>Ir a Home</p>
                        </TooltipContent>
                    </Tooltip>
                </MenubarMenu>
                <MenubarMenu>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                className={`text-white h-12 bg-transparent btn-hover ${color} `}
                                onClick={() => {
                                    scrollToSection(sectionRefs.skills)
                                }}
                            >
                                <TerminalSquare />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-800 dark:bg-white  text-white  dark:text-black">
                            <p>Ir a Habilidades</p>
                        </TooltipContent>
                    </Tooltip>
                </MenubarMenu>
                <MenubarMenu>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                className={`text-white h-12  bg-transparent btn-hover ${color} `}
                                onClick={() => {
                                    scrollToSection(sectionRefs.experience)
                                }}
                            >
                                <Briefcase />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-800  dark:bg-white  text-white  dark:text-black">
                            <p>Ir a Experiencia</p>
                        </TooltipContent>
                    </Tooltip>
                </MenubarMenu>
                <MenubarMenu>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                className={`text-white h-12 bg-transparent btn-hover ${color} `}
                                onClick={() => {
                                    scrollToSection(sectionRefs.proyects)
                                }}
                            >
                                {' '}
                                <PanelsTopLeft />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-800 dark:bg-white  text-white  dark:text-black">
                            <p>Ir a Poyectos</p>
                        </TooltipContent>
                    </Tooltip>
                </MenubarMenu>
                <MenubarMenu>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                className={`text-white h-12 bg-transparent btn-hover ${color} `}
                                onClick={() => {
                                    scrollToSection(sectionRefs.contact)
                                }}
                            >
                                <MailPlus />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-800 dark:bg-white  text-white  dark:text-black">
                            <p>Ir a Contacto</p>
                        </TooltipContent>
                    </Tooltip>
                </MenubarMenu>
            </Menubar>
        </TooltipProvider>
    )
}
