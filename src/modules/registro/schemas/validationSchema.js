import * as yup from 'yup'

export const schema = yup.object({
    nombre: yup.string().required('Este campo es obligatorio'),
    email: yup.string().email('Ingrese un formato de correo válido').required('Este campo es obligatorio')
})