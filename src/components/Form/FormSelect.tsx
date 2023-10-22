import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react"
import { IFormState } from "./interface"

interface props {
    name: string;
    label: string;
    id: string;
    error: string;
    submitted: boolean;
    form: IFormState;
    arrayLength?: number;
    setForm: Dispatch<SetStateAction<IFormState>>;
    hasError?: boolean;
    isMonth?: boolean;
    placeholder?: string;
    maxLength?: number;
    minLength?: number;
    required?: boolean;
}

const FormSelect = ({
  id,
  name,
  label,
  submitted,
  error,
  maxLength,
  isMonth,
  arrayLength = 1,
  hasError,
  form,
  setForm,
}: props) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target
        
    // //? CardNumber validation
    // if (form.cardNumber.length >= 16 && value.length >= 16) return
    // //? CardHolder validation
    // if (form.cardHolder.length >= 20 && value.length >= 20) return
    // //? CVV validation
    // if ( name === "cvv" && form.cvv.length >= 3 && value.length >= 3) return
    // //? Regex validation
    // if (regex && !value.match(regex) && value !== "") return
        
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <label
        htmlFor={id}
        className="font-bold text-slate-700 text-opacity-60 text-sm"
      >{label}
      </label>
      <select
        id={id}
        name={name}
        onChange={handleChange}
        className="w-full font-bold text-slate-700 text-opacity-60 border-gray-400 border-opacity-50 
        rounded-lg text-sm"
      >
        <option value=""></option>
        {Array.from({ length: 12 }, (_, i) => i + arrayLength).map((number) => (
          <option value={number} key={number}>
            {isMonth && number < 10 ? `0${number}` : number}
          </option>
        ))}
      </select>
      {submitted && hasError && <p className="text-xs text-red-500">{error}</p>}
    </>
  )
}

export default FormSelect