import { Home, Info, Mail } from 'lucide-react'

export const Shortcut: React.FunctionComponent = () => {
    return (
        <div className="w-full lg:max-w-screen-lg mx-auto ">
            <div className="fixed bottom-0 left-0 rounded-xl lg:left-auto lg:right-1/2 transform lg:translate-x-1/2 w-full lg:max-w-md bg-gray-800 text-white px-4 py-2 flex justify-around items-center shadow-md">
                <div className="flex items-center">
                    <Home className="mr-2 text-xl" />
                    <span className="text-lg">Home</span>
                </div>
                <div className="flex items-center">
                    <Info className="mr-2 text-xl" />
                    <span className="text-lg">About</span>
                </div>
                <div className="flex items-center">
                    <Mail className="mr-2 text-xl" />
                    <span className="text-lg">Contact</span>
                </div>
            </div>
        </div>
    )
}
