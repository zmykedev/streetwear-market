import { Button } from '../button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../tooltip'

import { Menubar, MenubarMenu } from '@/components/ui/menubar'

import { Home, TerminalSquare, Briefcase, MailPlus } from 'lucide-react'
import './index.css'

interface MenuProps {
    sectionRefs: {
        home: React.RefObject<HTMLElement>
        skills: React.RefObject<HTMLElement>
        experience: React.RefObject<HTMLElement>
        contact: React.RefObject<HTMLElement>
    }
}

export const MenuBar: React.FunctionComponent<MenuProps> = ({
    sectionRefs,
}) => {
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
    return (
        <TooltipProvider>
            <Menubar className="fixed flex justify-center space-x-5 bottom-0 left-0 right-0 mx-auto bg-white dark:bg-black shadow-lg p-5">
                <MenubarMenu>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                className="text-white bg-transparent btn-hover color-7"
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
                                className="text-white bg-transparent  btn-hover color-7"
                                onClick={() => {
                                    scrollToSection(sectionRefs.skills)
                                }}
                            >
                                <TerminalSquare />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-800 dark:bg-white  text-white  dark:text-black">
                            <p>Ir a Skills</p>
                        </TooltipContent>
                    </Tooltip>
                </MenubarMenu>
                <MenubarMenu>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                className="text-white bg-transparent  btn-hover color-7"
                                onClick={() => {
                                    scrollToSection(sectionRefs.experience)
                                }}
                            >
                                <Briefcase />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-800 dark:bg-white  text-white  dark:text-black">
                            <p>Ir a Experience</p>
                        </TooltipContent>
                    </Tooltip>
                </MenubarMenu>
                <MenubarMenu>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                className="text-white bg-transparent  btn-hover color-7"
                                onClick={() => {
                                    scrollToSection(sectionRefs.contact)
                                }}
                            >
                                <MailPlus />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-800 dark:bg-white  text-white  dark:text-black">
                            <p>Ir a Contact</p>
                        </TooltipContent>
                    </Tooltip>
                </MenubarMenu>
            </Menubar>
        </TooltipProvider>
    )
}
