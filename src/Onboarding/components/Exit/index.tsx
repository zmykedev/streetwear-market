import React from 'react'
import Confetti from 'react-confetti'

import { motion } from 'framer-motion'

export const Exit: React.FunctionComponent = () => {
    const [confetti, setConfetti] = React.useState<boolean>(false)

    React.useEffect(() => {
        // Activa el confeti al montar el componente
        setConfetti(true)
    }, [])

    const variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1.5 },
        },
    }

    return (
        <>
            {' '}
            <motion.div
                initial="hidden"
                animate={'visible'}
                variants={variants}
            >
                {confetti && (
                    <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                        numberOfPieces={150}
                        friction={0.98}
                        initialVelocityX={10}
                        initialVelocityY={10}
                        tweenDuration={1}
                    />
                )}
                <div className="flex flex-col justify-center items-center h-screen space-y-4">
                    <p className="text-2xl md:text-4xl font-bold text-center text-gray-200 hover:underline hover:decoration-5 hover:underline-offset-7 hover:decoration-wavy decoration-orange-600 animate-bounce">
                        ¡Has finalizado tu proceso de inscripción! <br />
                        Por favor, revisa tu correo.
                    </p>
                </div>
            </motion.div>
        </>
    )
}
