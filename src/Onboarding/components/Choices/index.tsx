import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { motion } from 'framer-motion'

import { CardChoice } from './CardChoice'
import { Controllers } from '../Wizard/Controllers'
import { useWizard } from '../Wizard/useWizard'
import RingLoader from 'react-spinners/RingLoader'

import { Choice, ChoicesProps } from './types'

export const Choices: React.FunctionComponent<ChoicesProps> = ({
    onChoiceSelected,
}) => {
    const wizard = useWizard()
    const [selectedId, setSelectedId] = useState<Choice>(Choice.Default)
    const [uuid, setUuid] = useState<string>('')
    const [wait, setWait] = useState(true)
    const [showChoices, setShowChoices] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setWait(false)
            setShowChoices(true)
        }, 1200)
        return () => clearTimeout(timer)
    }, [])

    const handleChoiceClick = (choiceId: Choice) => {
        const newSelectedId =
            selectedId === choiceId ? Choice.Default : choiceId
        setSelectedId(newSelectedId)
        console.log(newSelectedId, 'newselectid')
        updateUuid(newSelectedId)
    }

    const updateUuid = (newSelectedId: Choice) => {
        console.log(newSelectedId, 'new select on update ui ()')
        if (newSelectedId !== null) {
            const uniqueId = uuidv4()
            setUuid(uniqueId)
            onChoiceSelected?.(newSelectedId, uniqueId)
            wizard.update?.('uuid', uniqueId)
        }
    }

    const onPost = async () => {
        const data = { uuid, choice: selectedId }
        console.log(data, 'DATA')
        wizard.update?.('choice', selectedId)
        try {
            await axios.post(
                'https://stickerseller-backend-cb0779d78440.herokuapp.com/create_lead',
                data
            )
            wizard.onNextStep?.()
        } catch (error) {
            console.error('Error al enviar los datos', error)
        }
    }

    const choicesData = [
        {
            choice: Choice.With,
            title: 'Asóciate con nosotros con Financiamiento',
            label: 'Únete y crece con nosotros. Ofrecemos financiamiento flexible para expandir tu inventario y aumentar tus ventas.',
            path: '/img/finance.webp',
            alt: '',
        },
        {
            choice: Choice.Without,
            title: 'Compra directa de Stickers',
            label: 'Explora nuestra colección de stickers de alta calidad. Compra fácil y seguro, ideal para aficionados y coleccionistas.',
            path: '/img/direct.webp',
            alt: '',
        },
    ]

    const isNextDisabled =
        selectedId !== Choice.With && selectedId !== Choice.Without
    const isDisabled = (id: Choice) => selectedId !== null && selectedId !== id

    const variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1.5 },
        },
    }

    const choicesContent = (
        <motion.div
            initial="hidden"
            animate={showChoices ? 'visible' : 'hidden'}
            variants={variants}
        >
            <div className="flex flex-col mt-[15px] sm:mt-[0px] ">
                <p
                    className={`text-white absolute top-2 sm:top-10 sm:absolute overline ${
                        isNextDisabled
                            ? 'decoration-orange-600/[.33]'
                            : 'decoration-orange-600'
                    } text-xl left-1/2 -translate-x-1/2 shadow-2xl transform translate-y-1 scale-105`}
                >
                    Elige tu opción
                </p>
                <div className="lg:flex lg:flex-row mt-4 xs:flex xs:flex-col xs:gap-none gap-36 lg:gap-32 sm:gap-10 xs:h-[800px]    justify-center ">
                    {choicesData.map((data) => (
                        <CardChoice
                            key={data.choice}
                            title={data.title}
                            label={data.label}
                            path={data.path}
                            className={`hover:cursor-pointer w-[340px]    sm:w-[400px]  border-8 m-5 ${
                                selectedId === data.choice
                                    ? 'border-indigo-600'
                                    : 'border-transparent'
                            } ${
                                isDisabled(data.choice)
                                    ? 'opacity-50 cursor-not-allowed'
                                    : ''
                            }`}
                            onClick={() => handleChoiceClick(data.choice)}
                            disabled={isDisabled(data.choice)}
                        />
                    ))}
                </div>
                <Controllers
                    className=" sm:bottom-auto mb-5   sm:right-auto sm:relative sm:flex sm:justify-end "
                    isBackHidden
                    onNextStep={onPost}
                    isNextDisabled={isNextDisabled}
                />
            </div>
        </motion.div>
    )

    return (
        <div>
            {wait ? (
                <RingLoader
                    color="#ea580c"
                    loading={true}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            ) : (
                choicesContent
            )}
        </div>
    )
}
