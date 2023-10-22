import { Schema, model, models } from "mongoose"

const creditCardSchema = new Schema({
  cardNumber: {
    type: String,
    required: [true, "El número de la tarjeta es obligatorio"],
    trim: true,
    maxLength: [16, "El número de la tarjeta debe tener como máximo 16 caracteres"]
  },
  cardHolder: {
    type: String,
    required: [true, "El titular de la tarjeta es obligatorio"],
    trim: true,
    maxLength: [20, "El titular de la tarjeta debe tener como máximo 20 caracteres"]
  },
  month: {
    type: String,
    required: [true, "El mes de vencimiento es obligatorio"],
    trim: true,
    maxLength: [2, "El mes de vencimiento debe tener como máximo 2 caracteres"]
  },
  year: {
    type: String,
    required: [true, "El año de vencimiento es obligatorio"],
    trim: true,
    maxLength: [2, "El año de vencimiento debe tener como máximo 2 caracteres"]
  },
  cvv: {
    type: String,
    required: [true, "El CVV es obligatorio"],
    trim: true,
    maxLength: [3, "El CVV debe tener como máximo 3 caracteres"]
  },

})

const CreditCard = models.CreditCard || model("CreditCard", creditCardSchema)
export default CreditCard
