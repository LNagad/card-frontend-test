import { AddCardForm, CreditCard } from "@/components"

export default function Home() {
  return (
    <>
      <header className={"w-full h-[25%] lg:h-[170px] bg-indigo-600"}>
      </header>
      {/* h-[calc(100%-194px)] lg:h-[calc(100%-170px)] */}
      <main className="flex flex-col  items-center w-full h-[75%] lg:h-[calc(100%-170px)] px-6 
      bg-slate-50 relative">
        <CreditCard />
        <AddCardForm />
      </main>
    </>
  )
}
