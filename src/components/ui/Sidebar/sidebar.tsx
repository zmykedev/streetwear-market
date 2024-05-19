import React, { useState, useCallback } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { isMobile } from 'react-device-detect'
import { Button } from '../button'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import {
    GiClothes,
    GiBabyBottle,
    GiHomeGarage,
    GiHandBag,
    GiJewelCrown,
    GiSunglasses,
    GiRunningShoe,
    GiPoloShirt,
} from 'react-icons/gi'

import { BiSolidStore, BiSolidCart } from 'react-icons/bi'

import {
    IoIosArrowDroprightCircle,
    IoIosArrowDropleftCircle,
} from 'react-icons/io'

import {
    RowsIcon,
    PersonIcon,
    MagnifyingGlassIcon,
} from '@radix-ui/react-icons'

export const Sidebar: React.FunctionComponent = () => {
    const [toggle, setToggle] = useState<boolean>(false)

    const [list, setOpenList] = useState<boolean>(false)

    const handleNavegationList = useCallback(() => {
        setOpenList((prevToggle) => !prevToggle)
    }, [])

    const handleHideSidebar = useCallback(() => {
        setToggle((prevToggle) => !prevToggle)
    }, [])

    const categories = [
        { name: 'Poleras', icon: <GiPoloShirt className="size-8" /> },
        { name: 'Zapatillas', icon: <GiRunningShoe className="size-8" /> },
        { name: 'Accesiorios', icon: <GiSunglasses className="size-8" /> },
    ]

    const dinamicStyle = toggle ? 'w-64' : 'w-28'
    const toggleStyle = toggle ? 'left-[214px]' : 'left-[72px]'

    const List = () => {
        return (
            <NavigationMenu.List className="space-y-2 fixed">
                {categories.map((category) => (
                    <NavigationMenu.Item key={category.name}>
                        <NavigationMenu.Link
                            className="flex items-center text-2xl px-4 py-2 rounded-3xl hover:bg-gray-700 focus:bg-gray-700 h-14"
                            href={`#${category.name.toLowerCase()}`}
                        >
                            {category.icon}
                            {toggle && (
                                <span className="ml-2">{category.name}</span>
                            )}
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                ))}
            </NavigationMenu.List>
        )
    }

    if (isMobile) {
        return <></>
    }

    return (
        <NavigationMenu.Root
            className={`h-screen ${dinamicStyle} bg-gray-900 text-white p-4 fixed left-0 top-20`}
        >
            <div className="flex justify-start text-3xl mb-5 h-12">
                {toggle ? 'Categorias' : <BiSolidStore className="size-12" />}
            </div>
            <Button
                className={`hover:bg-gray-700 fixed ${toggleStyle} top-[102px] w-10 m-0 p-0`}
                onClick={handleHideSidebar}
            >
                {toggle ? (
                    <IoIosArrowDropleftCircle size={28} />
                ) : (
                    <IoIosArrowDroprightCircle size={28} />
                )}
            </Button>
            {List()}
        </NavigationMenu.Root>
    )
}
