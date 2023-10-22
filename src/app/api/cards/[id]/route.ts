

import { connectDB, disconnectDB } from "@/utils/mongodb"
import { NextResponse } from "next/server"
import { creditCard } from "@/models"
import { IFormState, validationSchema } from "@/components"
import { ValidationError } from "yup"

interface Params {
    id: string
}

export async function PUT(req: Request, { params }: { params: Params } ) {
  const { id } = params
  try {
    const form = await req.json() as IFormState
    console.log(form)
    // If validation is successful, continue with form processing
    await validationSchema.validate(form, { abortEarly: false })
    
    await connectDB()
    
    const card = await creditCard.findById(id)
    
    if (!card) return NextResponse.json({ ok: false, message: "Card not found" }, {status: 404})

    card.cardNumber = form.cardNumber
    card.cardHolder = form.cardHolder
    card.month = form.month
    card.year = form.year
    card.cvv = form.cvv

    console.log(card)
    
    await card.save()

    return NextResponse.json({ ok: true, message: "Card updated successfully!", data: card }, {status: 200})
  } catch (error) {
    
    // If validation fails, return validation errors to the client
    
    const validationError = error as ValidationError
    const errors: Record<string, string> = {}
  
    validationError.inner.forEach(err => {
      if (err.path) {
        errors[err.path] = err.message
      }
    })
  
    return NextResponse.json({ ok: false, errors: errors }, {status: 400})
  }
}
