import { CardBody, CardChip, CardHeader, CardNumber } from "./"

const CreditCard = () => {
  {/* //TODO: Card number encrypted, ex: 41**********1234 */}

  return (
    <section className="absolute -top-16 bg-slate-50 w-[370px] px-6 pt-5 pb-3 
    rounded-lg shadow-lg">
      <div className="flex w-full flex-col gap-1-2">
        <CardHeader />
        <CardChip />
        <CardNumber />
        {/* //* Card date */}
        {/* //* Card holder name */}
        <CardBody />
      </div>
    </section>
  )
}

export default CreditCard