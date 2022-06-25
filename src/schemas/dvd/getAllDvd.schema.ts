import * as yup from 'yup'

const getAllDvdSchema = yup.array().of(
    yup.object().shape({
        id: yup.string(),
        name: yup.string(),
        duration: yup.string(),
        stock: yup.object().shape({
            id: yup.string(),
            quantity: yup.number(),
            price: yup.number(),
        })
    })
).required()

export default getAllDvdSchema