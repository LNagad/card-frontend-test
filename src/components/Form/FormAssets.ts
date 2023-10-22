import * as Yup from "yup"

export const validationSchema =   Yup.object({
  cardNumber: Yup.string()
    .matches(/^[0-9]+$/, "El número de la tarjeta solo puede contener números")
    .max(16, "El número de la tarjeta debe tener un máximo de 16 caracteres")
    .min(16, "El número de la tarjeta debe tener un mínimo de 16 caracteres")
    .required("El número de la tarjeta es obligatorio"),
  cardHolder: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "El nombre del titular solo puede contener letras")
    .max(20, "El nombre del titular debe tener 20 caracteres o menos")
    .required("El nombre del titular es obligatorio"),
  cvv: Yup.string()
    .max(3, "El CVV debe tener un máximo de 3 caracteres")
    .min(3, "El CVV debe tener un mínimo de 3 caracteres")
    .matches(/^[0-9]+$/, "El CVV solo puede contener números")
    .required("El CVV es obligatorio"),
  year: Yup.number()
    .min(22, "El año debe estar entre 22 y 28")
    .max(28, "El año debe estar entre 22 y 28")
    .required("El año es obligatorio"),
  month: Yup.number()
    .min(1, "El mes debe estar entre 1 y 12")
    .max(12, "El mes debe estar entre 1 y 12")
    .required("El mes es obligatorio")
})

export const initialState = {
  cardNumber: "",
  cardHolder: "",
  month: "",
  year: "",
  cvv: ""
}

export const inputClass = `p-2 border-gray-400 w-full inline-flex border-opacity-50 
text-slate-700 disabled:text-opacity-60 font-medium rounded-lg text-sm`

export const selectClass = `
w-full text-slate-700 disabled:text-opacity-60 border-gray-400 
border-opacity-50 rounded-lg text-sm font-medium`
