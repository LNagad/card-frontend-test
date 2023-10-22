import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react"
import { IFormState } from "./interface"

interface props {
  name: string;
  label: string;
  id: string;
  error: string;
  submitted: boolean;
  form: IFormState;
  setForm: Dispatch<SetStateAction<IFormState>>;
  value: string;
  hasError?: boolean;
  inline?: boolean;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  regex?: RegExp | any;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
}

const FormInput = ({
  type = "text",
  id,
  name,
  label,
  submitted,
  error,
  inline,
  maxLength,
  hasError,
  regex,
  form,
  value,
  setForm,
}: props) => {
    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    
    //? CardNumber validation
    if (form.cardNumber.length >= 16 && value.length >= 16) return
    //? CardHolder validation
    if (form.cardHolder.length >= 20 && value.length >= 20) return
    //? CVV validation
    if ( name === "cvv" && form.cvv.length >= 3 && value.length >= 3) return
    //? Regex validation
    if (regex && !value.match(regex) && value !== "") return
    
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <label
        htmlFor={id}
        className="font-bold text-slate-700 text-opacity-60 text-sm"
      >{label}
      </label>
      <input
        id={id}
        onChange={handleChange}
        name={name}
        value={value}
        className={`p-2 border-gray-400 ${inline && "w-full inline-flex"} border-opacity-50 text-black font-medium rounded-lg text-sm`}
        type={type}
      />
      {submitted && hasError && <p className="text-xs text-red-500">{error}</p>}
    </>
  )
}

export default FormInput
