'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { Checkbox } from '@/components/ui/checkbox'

import { GenreFieldName } from './types'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { Controllers } from '../Wizard/Controllers'
import { useWizard } from '../Wizard/useWizard'

import { classes } from './styles'
import { InputContainer } from './components/styled'

import axios from 'axios'

const FormSchema = z.object({
    username: z.string().min(1, {
        message: 'El nombre es obligatorio.',
    }),
    rut: z
        .string()
        .min(7, {
            message: 'El RUT debe tener al menos 7 caracteres.',
        })
        .regex(/^[0-9]+-[0-9kK]$/, {
            message: 'Formato de RUT inválido.',
        }),
    email: z.string().email({
        message: 'Correo electrónico inválido.',
    }),
    phone: z.string().min(6, {
        message: 'El teléfono debe tener al menos 6 dígitos.',
    }),
    direction: z.string().min(1, {
        message: 'La dirección es obligatoria.',
    }),
    genre: z
        .object({
            men: z.boolean(),
            women: z.boolean(),
            other: z.boolean(),
        })
        .refine((data) => Object.values(data).some(Boolean), {
            message: 'Debe seleccionar al menos un género.',
        }),
    preference: z
        .object({
            email: z.boolean(),
            telefono: z.boolean(),
            whatsapp: z.boolean(),
        })
        .refine((data) => Object.values(data).some(Boolean), {
            message: 'Debe seleccionar al menos una preferencia de contacto.',
        }),
})

export function InputForm() {
    const wizard = useWizard()

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: '',
            rut: '',
            email: '',
            phone: '',
            direction: '',
            genre: {
                men: false,
                women: false,
                other: false,
            },
            preference: {
                email: false,
                telefono: false,
                whatsapp: false,
            },
        },
        mode: 'onChange',
    })

    const { formState, handleSubmit, setValue } = form

    const handleGenreChange = (checked: boolean, name: GenreFieldName) => {
        if (checked) {
            setValue('genre.men', false)
            setValue('genre.women', false)
            setValue('genre.other', false)
            setValue(name, true)
        } else {
            setValue(name, false)
        }
    }

    const { isValid } = formState

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        const uuid = wizard?.uuid
        const choice = wizard?.choice

        console.log(wizard?.uuid, choice, 'form')

        // Preparar datos para la solicitud POST
        const postData = {
            ...data,
            uuid,
            choice,
        }

        try {
            // Enviar datos al backend
            const response = await axios.post(
                'http://127.0.0.1:5000/upload_lead',
                postData
            )
            const responseData = response.data

            // Manejar la respuesta del servidor
            toast({
                title: 'Datos enviados correctamente',
                description: `ID del lead: ${responseData.lead_id}, UUID: ${responseData.uuid}, RUT: ${responseData.rut}`,
            })

            // Opcional: Navegar al siguiente paso en el wizard
            if (wizard.onNextStep) {
                wizard.onNextStep()
            }
        } catch (error) {
            console.error('Error al enviar los datos', error)
            toast({
                title: 'Error al enviar los datos',
                description: 'Hubo un problema al enviar el formulario.',
            })
        }
    }

    return (
        <div>
            <div className="w-[952px] h-[600px]   flex justify-center">
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field: fieldName }) => (
                                <InputContainer>
                                    <FormItem>
                                        <FormLabel className="text-white flex justify-start mt-6 text-lg">
                                            Nombre
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                className="text-white"
                                                placeholder="Jane Doe"
                                                {...fieldName}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                </InputContainer>
                            )}
                        />

                        <div className="flex flex-row  gap-8 -mt-3">
                            <FormField
                                control={form.control}
                                name="rut"
                                render={({ field: fieldRut }) => (
                                    <InputContainer>
                                        <FormItem>
                                            <FormLabel className="text-white flex justify-start mt-8 text-lg">
                                                Rut
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="w-[317px] text-white"
                                                    placeholder="20123345-6"
                                                    {...fieldRut}
                                                />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    </InputContainer>
                                )}
                            />

                            <InputContainer>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field: fieldEmail }) => (
                                        <FormItem>
                                            <FormLabel className="text-white flex justify-start mt-8 text-lg">
                                                Email
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="w-[317px] text-white"
                                                    placeholder="janedoe@gmail.com"
                                                    {...fieldEmail}
                                                />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </InputContainer>
                        </div>
                        <div className="flex flex-row mt-4  gap-8">
                            <InputContainer>
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field: fieldPhone }) => (
                                        <FormItem>
                                            <FormLabel className="text-white flex justify-start mt-8 text-lg">
                                                Teléfono
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="w-[317px] text-white"
                                                    placeholder="+569 76543567"
                                                    {...fieldPhone}
                                                />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </InputContainer>
                            <InputContainer>
                                <FormField
                                    control={form.control}
                                    name="direction"
                                    render={({ field: fieldDirection }) => (
                                        <FormItem>
                                            <FormLabel className="text-white flex justify-start mt-8 text-lg">
                                                Dirección
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="w-[317px] text-white"
                                                    placeholder="Sta. Beatriz 2500, Providencia"
                                                    {...fieldDirection}
                                                />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </InputContainer>
                        </div>
                        <div className="flex flex-row gap-40 mt-6">
                            <div className="flex items-start flex-col space-y-3">
                                {' '}
                                <FormLabel className="text-white flex justify-start  mt-8 mb-5 text-lg">
                                    Preferencia de Contacto
                                </FormLabel>
                                <div>
                                    <Controller
                                        name="preference.telefono"
                                        control={form.control}
                                        render={({
                                            field: {
                                                onChange,
                                                onBlur,
                                                value,
                                                name,
                                                ref,
                                            },
                                        }) => (
                                            <>
                                                <Checkbox
                                                    checked={value}
                                                    onCheckedChange={(
                                                        checked
                                                    ) => onChange(checked)}
                                                    onBlur={onBlur}
                                                    name={name}
                                                    ref={ref}
                                                    className={classes.check}
                                                />
                                                <FormLabel className="text-white mt-10 text-lg">
                                                    Teléfono
                                                </FormLabel>
                                            </>
                                        )}
                                    />
                                </div>
                                <div>
                                    <Controller
                                        name="preference.email"
                                        control={form.control}
                                        render={({
                                            field: {
                                                onChange,
                                                onBlur,
                                                value,
                                                name,
                                                ref,
                                            },
                                        }) => (
                                            <>
                                                <Checkbox
                                                    checked={value}
                                                    onCheckedChange={(
                                                        checked
                                                    ) => onChange(checked)}
                                                    onBlur={onBlur}
                                                    name={name}
                                                    ref={ref}
                                                    className={classes.check}
                                                />
                                                <FormLabel className="text-white mt-10 text-lg">
                                                    Email
                                                </FormLabel>
                                            </>
                                        )}
                                    />
                                </div>
                                <div>
                                    <Controller
                                        name="preference.whatsapp"
                                        control={form.control}
                                        render={({
                                            field: {
                                                onChange,
                                                onBlur,
                                                value,
                                                name,
                                                ref,
                                            },
                                        }) => (
                                            <>
                                                <Checkbox
                                                    checked={value}
                                                    onCheckedChange={(
                                                        checked
                                                    ) => onChange(checked)}
                                                    onBlur={onBlur}
                                                    name={name}
                                                    ref={ref}
                                                    className={classes.check}
                                                />
                                                <FormLabel className="text-white mt-10 text-lg">
                                                    Whatsapp
                                                </FormLabel>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="flex items-start flex-col space-y-3">
                                {' '}
                                <FormLabel className="text-white flex justify-start  mt-8 mb-5 text-lg">
                                    Género
                                </FormLabel>
                                <div>
                                    <Controller
                                        name={GenreFieldName.Men}
                                        control={form.control}
                                        render={({
                                            field: { onBlur, value, name, ref },
                                        }) => (
                                            <>
                                                <Checkbox
                                                    checked={value}
                                                    onCheckedChange={(
                                                        checked
                                                    ) =>
                                                        handleGenreChange(
                                                            checked as boolean,
                                                            GenreFieldName.Men
                                                        )
                                                    }
                                                    onBlur={onBlur}
                                                    name={name}
                                                    ref={ref}
                                                    className={classes.check}
                                                />
                                                <FormLabel className="text-white mt-10 text-lg">
                                                    Masculino
                                                </FormLabel>
                                            </>
                                        )}
                                    />
                                </div>
                                <div>
                                    <Controller
                                        name={GenreFieldName.Women}
                                        control={form.control}
                                        render={({
                                            field: { onBlur, value, name, ref },
                                        }) => (
                                            <>
                                                <Checkbox
                                                    checked={value}
                                                    onCheckedChange={(
                                                        checked
                                                    ) =>
                                                        handleGenreChange(
                                                            checked as boolean,
                                                            GenreFieldName.Women
                                                        )
                                                    }
                                                    onBlur={onBlur}
                                                    name={name}
                                                    ref={ref}
                                                    className={classes.check}
                                                />
                                                <FormLabel className="text-white mt-10 text-lg">
                                                    Femenino
                                                </FormLabel>
                                            </>
                                        )}
                                    />
                                </div>
                                <div>
                                    <Controller
                                        name={GenreFieldName.Other}
                                        control={form.control}
                                        render={({
                                            field: { onBlur, value, name, ref },
                                        }) => (
                                            <>
                                                <Checkbox
                                                    checked={value}
                                                    onCheckedChange={(
                                                        checked
                                                    ) =>
                                                        handleGenreChange(
                                                            checked as boolean,
                                                            GenreFieldName.Other
                                                        )
                                                    }
                                                    onBlur={onBlur}
                                                    name={name}
                                                    ref={ref}
                                                    className={classes.check}
                                                />
                                                <FormLabel className="text-white mt-10 text-lg">
                                                    Prefiero no decirlo
                                                </FormLabel>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
            <Controllers
                onBackStep={wizard.onBackStep}
                onNextStep={() => handleSubmit(onSubmit)()}
                isNextDisabled={!isValid}
            />
        </div>
    )
}
