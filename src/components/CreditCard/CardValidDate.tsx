"use client"

import { useFormStore } from "@/store"

const CardValidDate = () => {
  const form = useFormStore(x => x.form)
  return (
    <p className="inline-flex font-bold">{form.month}{form.year.length !== 0 &&"/"+form.year}</p>
  )
}

export default CardValidDate