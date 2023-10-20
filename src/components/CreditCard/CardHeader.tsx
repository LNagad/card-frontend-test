import Image from "next/image"

const CardHeader = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="w-11/12 flex gap-x-2 items-center">
        <p className="text-xl text-black font-bold">monobank</p> 
        <p className="text-slate-500 text-opacity-60">|</p>
        <p className="text-sm text-slate-500 text-opacity-60 font-medium">Universal Bank</p>
      </div>
      <div className="w-[15%]">
        <Image src="/signal.png" width={50} height={50} alt="card signal"/>
      </div>
    </div>
  )
}

export default CardHeader