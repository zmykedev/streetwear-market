import { FunctionComponent, useState } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { Button } from '../button'
import {
    GiClothes,
    GiBabyBottle,
    GiHomeGarage,
    GiHandBag,
    GiJewelCrown,
    GiSunglasses,
} from 'react-icons/gi'

import { BiSolidStore } from 'react-icons/bi'

import {
    IoIosArrowDroprightCircle,
    IoIosArrowDropleftCircle,
} from 'react-icons/io'

export const Sidebar: FunctionComponent = () => {
    const [toggle, setToggle] = useState<boolean>(false)

    const handleHideSidebar = () => {
        setToggle((prevToggle) => !prevToggle)
    }

    const categories = [
        { name: 'Women', icon: <GiClothes className="size-10" /> },
        { name: 'Men', icon: <GiClothes className="size-10" /> },
        { name: 'Kids', icon: <GiBabyBottle className="size-10" /> },
        { name: 'Home', icon: <GiHomeGarage className="size-10" /> },
        { name: 'Shoes', icon: <GiClothes className="size-10" /> },
        { name: 'Handbags', icon: <GiHandBag className="size-10" /> },
        { name: 'Jewelry', icon: <GiJewelCrown className="size-10" /> },
        { name: 'Accessories', icon: <GiSunglasses className="size-10" /> },
    ]

    const dinamicStyle = toggle ? 'w-64' : 'w-28'
    return (
        <NavigationMenu.Root
            className={`  h-screen ${dinamicStyle} bg-gray-900 text-white p-4 fixed left-0 top-20`}
        >
            <div className="flex justify-start text-3xl mb-5">
                {toggle ? 'Categorias' : <BiSolidStore className="size-12" />}{' '}
            </div>
            <Button
                onClick={() => {
                    handleHideSidebar()
                }}
            >
                <IoIosArrowDropleftCircle size={20} />
            </Button>
            <NavigationMenu.List className="space-y-2">
                {categories.map((category) => (
                    <NavigationMenu.Item key={category.name}>
                        <NavigationMenu.Link
                            className="flex items-center text-2xl px-4 py-2 rounded-3xl hover:bg-gray-700 focus:bg-gray-700"
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
        </NavigationMenu.Root>
    )
}
