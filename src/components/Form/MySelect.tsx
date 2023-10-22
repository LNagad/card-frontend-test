"use client"

import { useFormStore } from "@/store"
import { ErrorMessage, useField } from "formik"

interface Props {
    label: string,
    id?: string,
    name: string,
    [x: string]: any
}

export const MySelect = ({ label, ...props }: Props) => {
  
  const setForm = useFormStore(x => x.setForm)

  const [ field, meta ] = useField(props)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target

    field.onChange(e)
    setForm({ [field.name]: value })
  }

  return (
    <>
      <label className="font-bold text-slate-700 text-opacity-60 text-sm" htmlFor={ props.id || props.name }>{ label }</label>
      <select { ...field } { ...props } onChange={handleChange} />
      <ErrorMessage name={ props.name } className="text-sm text-red-500 font-medium" component='span' />
    </>
  )
}
