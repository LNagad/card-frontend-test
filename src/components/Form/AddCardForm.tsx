const AddCardForm = () => {
  return (
    <section className="w-full md:w-[370px] h-full pt-48">
      <form className="w-full flex flex-col justify-start gap-y-4">
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
          <label
            htmlFor=""
            className="font-bold text-slate-700 text-opacity-60 text-sm"
          >
            Card expire date
          </label>
          <div className="flex gap-x-4">
            <select
              name=""
              className="font-bold text-slate-700 text-opacity-60 border-gray-400 
              border-opacity-50 rounded-lg text-sm"
            >
              <option value="">Month</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                <option value={month} key={month}>
                  {month}
                </option>
              ))}
            </select>
            <select
              name=""
              className="font-bold text-slate-700 text-opacity-60 border-gray-400 border-opacity-50 
              rounded-lg text-sm"
            >
              <option value="">Year</option>
              {Array.from({ length: 7 }, (_, i) => i + 22).map((day) => (
                <option value={day} key={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col w-[98.4px] gap-y-2">
          <label
            htmlFor=""
            className="font-bold text-slate-700 text-opacity-60 text-sm"
          >CVV
          </label>
          <input type="number" className="p-2 border-gray-400 border-opacity-50 text-black font-medium rounded-lg text-sm" />
        </div>

        <div className="w-full flex justify-between">
          <button
            type="button"
            className="bg-gray-200 text-gray-500 text-opacity-40 rounded-xl w-1/3 py-3 px-2 font-bold text-sm"
          >Cancel
          </button>
          <button
            type="submit"
            className="bg-indigo-600 text-white rounded-xl w-1/3 py-3 px-2 font-bold text-sm"
          >Add Card
          </button>
        </div>
      </form>
    </section>
  )
}

export default AddCardForm
