"use client"

import { useFormStore } from "@/store"

const CardValidDate = () => {
  const form = useFormStore(x => x.form)
  const number = Number(form.month)
  return (
    <p className="inline-flex font-bold">{ number != 0 && number < 10 ? `0${number}` : number !== 0 && number}
      {form.year.length !== 0 &&"/"+form.year}</p>
  )
}

export default CardValidDate