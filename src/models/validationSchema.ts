import * as Yup from "yup"

const validationSchema = Yup.object({
  cardNumber: Yup.string()
    .matches(/^[0-9]+$/, "Card number must be only numbers")
    .length(16, "Card number must be 16 characters long")
    .required("Card number is required"),
  cardHolder: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Card holder must be only letters")
    .max(20, "Card holder must be 20 characters or less")
    .required("Card holder is required"),
  month: Yup.string()
    .length(2, "Month must be 2 characters long")
    .required("Month is required"),
  year: Yup.string()
    .length(2, "Year must be 2 characters long")
    .required("Year is required"),
  cvv: Yup.string()
    .matches(/^[0-9]+$/, "CVV must be only numbers")
    .length(3, "CVV must be 3 characters long")
    .required("CVV is required"),
})

export default validationSchema