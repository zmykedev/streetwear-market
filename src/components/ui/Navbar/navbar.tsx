import { FunctionComponent } from 'react'
import {
    MagnifyingGlassIcon,
    PersonIcon,
    RowsIcon,
} from '@radix-ui/react-icons'
import { BiSolidCart } from 'react-icons/bi'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '../sheet'
import { GiPoloShirt, GiRunningShoe, GiSunglasses } from 'react-icons/gi'

const categories = [
    { name: 'Poleras', icon: <GiPoloShirt className="size-8" /> },
    { name: 'Zapatillas', icon: <GiRunningShoe className="size-8" /> },
    { name: 'Accesiorios', icon: <GiSunglasses className="size-8" /> },
]

export const Navbar: FunctionComponent = () => {
    return (
        <div className="flex w-full h-20 bg-gray-900 text-white fixed top-0 left-0 shadow-md z-50  border-b-4">
            <div className="absolute inset-y-0 right-4 z-50 top-5 h-10   ">
                <div className="flex flex-row items-center space-x-6">
                    <MagnifyingGlassIcon className="size-7" />
                    <BiSolidCart className="size-7" />
                    <PersonIcon className="size-7" />
                    <Sheet>
                        <SheetTrigger asChild>
                            <RowsIcon className="size-7" />
                        </SheetTrigger>
                        <SheetContent className="w-80">
                            <SheetHeader>
                                <SheetTitle className=" flex border-b-2 pb-4 mb-4 justify-center">
                                    Wear Pulse
                                </SheetTitle>
                            </SheetHeader>
                            <div className="space-y-4">
                                {categories.map((category) => (
                                    <div
                                        className="flex p-1 flex-row hover:bg-slate-700 hover:rounded-xl  justify-start gap-x-4"
                                        key={category.name}
                                    >
                                        {category.icon}
                                        {category.name}
                                    </div>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}
