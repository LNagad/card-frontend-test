const AddCardForm = () => {
  return (
    <section className="w-full h-full md:w-[370px] mt-48">
      <form className="w-full h-full relative flex flex-col justify-start gap-y-4">
        <div className="flex flex-col w-full gap-y-2">
          <label
            htmlFor=""
            className="font-bold text-slate-700 text-opacity-60 text-sm"
          >Card Number
          </label>
          {/* //todo: Card number max length <=16 */}
          {/* //todo: Card number encrypted, ex: 41**********1234 */}
          <input
            className="p-2 border-gray-400 border-opacity-50 text-black font-medium rounded-lg text-sm"
            type="text"
          />
        </div>
        <div className="flex flex-col w-full gap-y-2">
          <label
            htmlFor=""
            className="font-bold text-slate-700 text-opacity-60 text-sm"
          >Card Holder name
          </label>
          {/* //todo: Card number max length <=20 | only letters */}
          <input className="p-2 border-gray-400 border-opacity-50 text-black font-medium rounded-lg text-sm" />
        </div>

        <div className="flex flex-col w-full gap-y-2">
        
          <div className="flex gap-x-4">
            <div className="w-1/3">
              <label
                htmlFor=""
                className="font-bold text-slate-700 text-opacity-60 text-sm"
              >Month
              </label>
              <select
                name=""
                className="w-full font-bold text-slate-700 text-opacity-60 border-gray-400 
                  border-opacity-50 rounded-lg text-sm"
              >
                <option value=""></option>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                  <option value={month} key={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/3">
              <label
                htmlFor=""
                className="font-bold text-slate-700 text-opacity-60 text-sm"
              >Year
              </label>
              <select
                name=""
                className="w-full font-bold text-slate-700 text-opacity-30 border-gray-400 border-opacity-50 
               rounded-lg text-sm"
              >
                <option value=""></option>
                {Array.from({ length: 7 }, (_, i) => i + 22).map((day) => (
                  <option value={day} key={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/3">
              <label
                htmlFor=""
                className="font-bold text-slate-700 text-opacity-60 text-sm"
              >CVV
              </label>
              <input 
                type="number" 
                
                className="w-full p-2 inline-flex border-gray-400 border-opacity-50 text-black font-medium 
              rounded-lg text-sm" />
            </div>
          </div>
            
        </div>

        <div className="w-full pt-6 md:pt-0 flex gap-x-5">
          <button
            type="button"
            className="bg-gray-200 text-gray-500 text-opacity-40 rounded-xl w-[31.5%] py-3 px-2 font-bold text-sm"
          >Cancel
          </button>
          <button
            type="submit"
            className="bg-indigo-600 text-white rounded-xl w-[70%] py-3 px-2 font-bold text-sm"
          >Add Card
          </button>
        </div>
      </form>
    </section>
  )
}

export default AddCardForm
