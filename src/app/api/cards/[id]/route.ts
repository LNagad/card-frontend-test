

import { connectDB, disconnectDB } from "@/utils/mongodb"
import { NextResponse } from "next/server"
import { creditCard } from "@/models"
import { IFormState, validationSchema } from "@/components"
import { ValidationError } from "yup"
import mongoose from "mongoose"


interface Params {
    id: string
}


export async function GET(req: Request, { params }: { params: Params } ) {
  const { id } = params
  try {
    
    if (!mongoose.Types.ObjectId.isValid(id)) return NextResponse.json({ ok: false, message: "Invalid id" }, {status: 400})
        
    await connectDB()

    const card = await creditCard.findById(id)

    if (!card) return NextResponse.json({ ok: false, message: "Card not found" }, {status: 404})

    return NextResponse.json({ ok: true, message: "Card fetched successfully!", data: card }, {status: 200})
  } catch (error) {

    return NextResponse.json({ ok: false, message: error  }, {status: 400})
  }
}


export async function PUT(req: Request, { params }: { params: Params } ) {
  const { id } = params
  try {

    if (!mongoose.Types.ObjectId.isValid(id)) return NextResponse.json({ ok: false, message: "Invalid id" }, {status: 400})
        
    const form = await req.json() as IFormState
    
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


export async function DELETE(req: Request, { params }: { params: Params } ) {
  const { id } = params
  try {
    
    if (!mongoose.Types.ObjectId.isValid(id)) return NextResponse.json({ ok: false, message: "Invalid id" }, {status: 400})
        
    await connectDB()
    
    const card = await creditCard.findByIdAndDelete(id)
    
    if (!card) return NextResponse.json({ ok: false, message: "Card not found" }, {status: 404})

    return NextResponse.json({ ok: true, message: "Card deleted successfully!", id: card._id }, {status: 200})
  } catch (error) {

    return NextResponse.json({ ok: false, message: error  }, {status: 400})
  }
}
