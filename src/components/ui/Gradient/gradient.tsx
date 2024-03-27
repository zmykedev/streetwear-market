import React from 'react'
import { Novatrix } from 'uvcanvas'

export function Gradient() {
    const [text, setText] = React.useState('Welcome to my portfolio 🙌')

    React.useEffect(() => {
        // Función para actualizar el estado del texto según el ancho de la pantalla
        function handleResize() {
            if (window.innerWidth <= 640) {
                // Asume 640px como el breakpoint para 'mobile'
                setText('Welcome 🙌')
            } else {
                setText('Welcome to my portfolio 🙌')
            }
        }

        // Agregar event listener
        window.addEventListener('resize', handleResize)

        // Llamar a handleResize para establecer el estado inicial correcto
        handleResize()

        // Limpiar el event listener al desmontar el componente
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <div className="relative w-full max-w-5xl xl:max-w-xl mx-auto h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[300px] overflow-hidden rounded-lg">
            <div className="absolute inset-0">
                <Novatrix />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="overflow-hidden text-4xl font-bold leading-2 pb-2 text-slate-900  drop-shadow-md">
                    {text.match(/./gu)!.map((char, index) => (
                        <span
                            className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                            key={`${char}-${index}`}
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </h1>
            </div>
        </div>
    )
}
