"use client"

import { ErrorMessage, useField } from "formik"

interface Props {
    label: string,
    id?: string,
    name: string,
    [x: string]: any
}

export const MySelect = ({ label, ...props }: Props) => {

  const [ field, meta ] = useField(props)

  return (
    <>
      <label className="font-bold text-slate-700 text-opacity-60 text-sm" htmlFor={ props.id || props.name }>{ label }</label>
      <select { ...field } { ...props } />
      <ErrorMessage name={ props.name } className="text-sm text-red-500 font-medium" component='span' />
    </>
  )
}
