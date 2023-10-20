import Image from "next/image"

const CardChip = () => {
  return (
    <div className="flex w-full justify-start">
      <Image src="/chip.png" width={50} height={50} alt="card chip" />
    </div>
  )
}

export default CardChip