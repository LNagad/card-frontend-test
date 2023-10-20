import React from "react"

interface props {
    groups: RegExpMatchArray | null
}

const CardNumber = ({ groups } : props) => {
  return (
    <div className="flex w-full justify-between ps-24 relative">
      <span className="absolute right-0 text-slate-500 text-[10px] -top-4">
        <p>world</p>
      </span>
      {/* //* Card number */}
      {groups && groups.map((group, index) => (
        <p key={index} className="text-slate-500 font-medium">{group}</p>
      ))}  
    </div>
  )
}

export default CardNumber