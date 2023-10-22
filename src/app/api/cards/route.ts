import { connectDB, disconnectDB } from "@/utils/mongodb"
import { NextRequest, NextResponse } from "next/server"
import { creditCard } from "@/models"
import { IFormState } from "@/components"

export async function GET() {

  await connectDB()
  
  const cards = await creditCard.find()
      
  await disconnectDB()
      
  return NextResponse.json({ ok: true, data: cards})
}

export async function POST(req: NextRequest) {
  try {
    await connectDB()

    const form : IFormState = await req.json()

    const alreayExists = await creditCard.findOne({ cardNumber: form.cardNumber })

    const ending = form.cardNumber.substring(13,16)

    if (alreayExists) return NextResponse.json(
      { 
        ok: false, 
        message: `Card ending in ${ending} already exists` 
      }, 
      {status: 400}
    )


    const savedCard = await creditCard.create(form)
    await savedCard.save()
    
    await disconnectDB()

    console.log(savedCard)

    return NextResponse.json({ ok: true, message: "Created!" }, {status: 201})

  } catch (error) {
    
    console.log(error)

    return NextResponse.json({ ok: false, message: error }, {status: 400})
  }
}
