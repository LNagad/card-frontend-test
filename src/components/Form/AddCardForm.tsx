"use client"

import { SetStateAction, useState } from "react"
import { IFormState } from "./interface"
import FormInput from "./FormInput"
import { FormSelect } from "."

const AddCardForm = () => {

  {/* //TODO: Card number encrypted, ex: 41**********1234 */}

  const [form, setForm] = useState<IFormState>({
    cardNumber: "",
    cardHolder: "",
    month: "",
    year: "",
    cvv: ""
  })
  
  console.log("re rendererd")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("submitted")
    console.log(form)
  }

  return (
    <section className="w-full h-full md:w-[370px] mt-48">
      <form
        onSubmit={handleSubmit}
        className="w-full h-full relative flex flex-col justify-start gap-y-4"
      >
        <div className="flex flex-col w-full gap-y-2">
          <FormInput
            id="CardNumber"
            name="cardNumber"
            type="number"
            label="Card Number"
            regex={/^[0-9]+$/}
            error="Invalid card number"
            value={form.cardNumber}
            submitted={false}
            form={form}
            setForm={setForm}
          />
        </div>
        <div className="flex flex-col w-full gap-y-2">
          <FormInput
            id="CardHolder"
            name="cardHolder"
            label="Card Holder Name"
            regex={/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/}
            error="Invalid card holder name"
            value={form.cardHolder}
            submitted={false}
            form={form}
            setForm={setForm}
          />
        </div>

        <div className="flex flex-col w-full gap-y-2">
          <div className="flex gap-x-4">
            <div className="w-1/3">
              <FormSelect
                name="month"
                label="Month"
                isMonth={true}
                id="Month"
                error="Invalid month"
                submitted={false}
                form={form}
                setForm={setForm}
              />
            </div>
            <div className="w-1/3">
              <FormSelect
                name="year"
                label="Year"
                id="Year"
                error="Invalid year"
                submitted={false}
                form={form}
                setForm={setForm}
              />
            </div>
            <div className="w-1/3">
              <FormInput
                id="Cvv"
                inline={true}
                name="cvv"
                type="number"
                label="CVV"
                error="Invalid card cvv"
                value={form.cvv}
                submitted={false}
                form={form}
                setForm={setForm}
              />
            </div>
          </div>
        </div>

        <div className="w-full pt-6 md:pt-0 flex gap-x-5">
          <button
            type="button"
            className="bg-gray-200 text-gray-500 text-opacity-40 rounded-xl w-[31.5%] py-3 px-2 font-bold text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-indigo-600 text-white rounded-xl w-[70%] py-3 px-2 font-bold text-sm"
          >
            Add Card
          </button>
        </div>
      </form>
    </section>
  )
}

export default AddCardForm
