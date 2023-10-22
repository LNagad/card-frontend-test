import * as Yup from "yup"

export const validationSchema =   Yup.object({
  cardNumber: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers are allowed")
    .max(16, "This field should be 16 characters maximum")
    .min(16, "This field should be 16 characters minimum")
    .required("This field is required"),
  cardHolder: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Only letters are allowed")
    .max(20, "This field should be 20 characters or less")
    .required("This field is required"),
  cvv: Yup.string()
    .max(3, "This field should be 3 characters maximum")
    .min(3, "This field should be 3 characters minimum")
    .matches(/^[0-9]+$/, "Only numbers are allowed")
    .required("Required"),
  year: Yup.string()
    .required("Required"),
  month: Yup.string()
  // .notOneOf([ "it-jr" ], "This option is not allowed")
    .required("Required")
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
