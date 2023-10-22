"use client"

import { useFormStore } from "@/store"

const CardNumber = () => {
  const form = useFormStore(x => x.form)
  // const cardNumber = "5375441145400954"
  const groups = form.cardNumber.match(/.{1,4}/g)

  return (
    <div className="flex w-full  justify-between ps-24 pe-3 relative h-6">
      
      <div className="flex gap-x-[26px] justify-end w-full relative">
        <span className="absolute right-0 text-slate-500 text-[10px] -top-4">
          <p>world</p>
        </span>
        {groups && groups.map((group, index) => (
          <p key={index} className="text-slate-500 font-medium">{group}</p>
        ))}  
      </div>
    </div>
  )
}

export default CardNumber