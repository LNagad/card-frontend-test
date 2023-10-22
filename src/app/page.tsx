import { AddCardForm, CreditCard } from "@/components"
import { Toaster } from "react-hot-toast"

export default function Home() {
  return (
    <>
      <Toaster   
        position="top-right"
        reverseOrder={false} />
      <header className={"w-full h-[25%] lg:h-[170px] bg-indigo-600"}>
      </header>
      <main className="flex flex-col  items-center w-full h-[75%] lg:h-[calc(100%-170px)] px-6 
      bg-slate-50 relative">
        <CreditCard />
        <AddCardForm />
      </main>
    </>
  )
}
