import { MasterCardIcon } from "@/icons"
import CardValidDate from "./CardValidDate"
import CardHolderName from "./CardHolderName"

const CardBody = () => {
  return (    
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col gap-y-1 ">
    
        <span className="flex justify-end gap-x-2 items-center right-0 text-slate-500 text-[10px] -top-4">
          <div className="block">
            <p className="uppercase font-bold text-[7px]">valid</p>
            <p className="uppercase font-bold text-[7px]">thru</p>
          </div>
          <CardValidDate />
        </span>
        <CardHolderName />
      </div>

      <div className="w-[35%] flex justify-end">
        <MasterCardIcon />
      </div>
    </div>
  )
}

export default CardBody