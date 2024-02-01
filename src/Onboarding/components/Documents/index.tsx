import React from 'react'

import axios from 'axios'

import { Dropzone, ExtFile, FileMosaic } from '@files-ui/react'

import { Controllers } from '../Wizard/Controllers'
import { useWizard } from '../Wizard/useWizard'

export const Documents: React.FunctionComponent = () => {
    const { onBackStep } = useWizard()
    const wizard = useWizard()

    const [carnetDelantero, setFilesDropzone1] = React.useState<ExtFile[]>([])
    const [carnetTrasero, setFilesDropzone2] = React.useState<ExtFile[]>([])
    const [estudios, setFilesDropzone3] = React.useState<ExtFile[]>([])

    const [showButton1, setShowButton1] = React.useState(false)
    const [showButton2, setShowButton2] = React.useState(false)

    const [showButton3, setShowButton3] = React.useState(false)

    const updateFiles1 = (newFiles: ExtFile[]) => {
        setFilesDropzone1(newFiles)
        setShowButton1(newFiles.length > 0)
    }
    const updateFiles2 = (newFiles: ExtFile[]) => {
        setFilesDropzone2(newFiles)
        setShowButton2(newFiles.length > 0)
    }
    const updateFiles3 = (newFiles: ExtFile[]) => {
        setFilesDropzone3(newFiles)
        setShowButton3(newFiles.length > 0)
    }

    // Combina los archivos de los tres Dropzones cuando sea necesario
    const allDocuments = [...carnetDelantero, ...carnetTrasero, ...estudios]

    console.log(carnetDelantero, 'carnetdelantro')

    console.log(allDocuments)

    const isNextDisabled = allDocuments.length < 3

    const onPost = async () => {
        const formData = new FormData()

        try {
            await axios
                .post('http://127.0.0.1:5000/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data', // Important for file uploads
                    },
                })
                .then((response) => {
                    // Handle success
                    console.log(response.data)
                })
                .catch((error) => {
                    // Handle error
                    console.error('Error uploading file', error)
                })

            if (typeof wizard?.onNextStep === 'function') {
                wizard.onNextStep()
            }
        } catch (error) {
            console.error('Error al enviar los datos', error)
            // Manejar el error
        }
    }

    return (
        <div>
            <div className="flex flex-row gap-36 w-[952px] h-[600px] justify-center">
                <div className="grid grid-cols-5 gap-1 mt-9">
                    <div className="col-span-2 col-start-2">
                        {' '}
                        <Dropzone
                            onChange={updateFiles1}
                            accept="image/*"
                            style={{ width: '220px', height: '200px' }}
                            footerConfig={{
                                customMessage: 'Foto Carnet Delantero',
                                style: {
                                    color: '#b74511',
                                    fontSize: '16px',
                                    width: '220px',
                                },
                            }}
                            background="#eeeeec"
                            headerConfig={{
                                style: {
                                    opacity: showButton1 ? 1 : 0,
                                },
                            }}
                        >
                            {carnetDelantero?.map((file, index) => {
                                return (
                                    <FileMosaic key={index} {...file} preview />
                                )
                            })}{' '}
                        </Dropzone>
                    </div>
                    <div className="col-span-2 col-start-4">
                        {' '}
                        <Dropzone
                            style={{ width: '220px', height: '200px' }}
                            onChange={updateFiles2}
                            background="#eeedec"
                            accept="image/*"
                            footerConfig={{
                                customMessage: 'Foto Carnet Trasero',
                                style: {
                                    color: '#b74511',
                                    fontSize: '16px',
                                    width: '220px',
                                },
                            }}
                            headerConfig={{
                                style: {
                                    opacity: showButton2 ? 1 : 0,
                                },
                            }}
                        >
                            {carnetTrasero?.map((file, index) => {
                                return (
                                    <FileMosaic key={index} {...file} preview />
                                )
                            })}{' '}
                        </Dropzone>
                    </div>
                    <div className="col-span-1 col-start-3">
                        {' '}
                        <Dropzone
                            style={{ width: '220px', height: '200px' }}
                            onChange={updateFiles3}
                            accept="image/*"
                            background="#eeeeec"
                            footerConfig={{
                                customMessage: 'Papel de Estudios',
                                style: {
                                    color: '#b74511',
                                    fontSize: '16px',
                                    width: '220px',
                                },
                            }}
                            headerConfig={{
                                style: {
                                    opacity: showButton3 ? 1 : 0,
                                },
                            }}
                        >
                            {estudios?.map((file, index) => {
                                return (
                                    <FileMosaic key={index} {...file} preview />
                                )
                            })}{' '}
                        </Dropzone>
                    </div>
                </div>
            </div>
            <Controllers
                onBackStep={onBackStep}
                onNextStep={onPost}
                isNextDisabled={isNextDisabled}
                isFinish
            />
        </div>
    )
}
