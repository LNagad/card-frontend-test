import { CardBody, CardChip, CardHeader, CardNumber } from "./"

const CreditCard = () => {
  const cardNumber = "5375441145400954"
  const groups = cardNumber.match(/.{1,4}/g)

  return (
    <section className="bg-slate-50 w-[370px] px-6 pt-5 pb-3 rounded-lg shadow-2xl">
      <div className="flex w-full flex-col gap-1-2">
        <CardHeader />
        <CardChip />
        <CardNumber groups={groups} />
        {/* //* Card date */}
        {/* //* Card holder name */}
        <CardBody />
      </div>
    </section>
  )
}

export default CreditCard