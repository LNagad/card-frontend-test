"use client"

import { useFormStore } from "@/store"
import { TextSubstring } from "@/utils"

const CardHolderName = () => {
  const form = useFormStore(x => x.form)
  return (
    <p className={"uppercase font-medium text-sm text-gray-800 w-full"}>
      {TextSubstring(form.cardHolder, 20)}
    </p>
  )
}

export default CardHolderName