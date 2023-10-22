"use client"

import { useFormStore } from "@/store"
import { ErrorMessage, useField } from "formik"
import { ChangeEvent } from "react"

interface Props {
    label: string,
    id?: string,
    name: string,
    type?: string,
    // type?: 'text' | 'email' | 'password'
    placeholder?: string,
    [x: string]: any
}

export const MyTextInput = ({ label, type = "text", ...props }: Props) => {
  
  const setForm = useFormStore(x => x.setForm)
  const form = useFormStore(x => x.form)
  const [ field, meta ] = useField(props)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    if (name === "cardNumber" && form.cardNumber.length === 16 && value.length > form.cardNumber.length) return

    field.onChange(e)
    setForm({ [field.name]: value })
  }

  return (
    <>
      <label className="font-bold text-slate-700 text-opacity-60 text-sm" htmlFor={ props.id || props.name }>{ label }</label>
      <input className='form-control' type={ type } { ...field } { ...props } onChange={handleChange} />
      <ErrorMessage className="text-sm text-red-500 font-medium" name={ props.name } component='span' />
    </>
  )
  
}