"use client"

import { ErrorMessage, useField } from "formik"

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

  const [ field, meta ] = useField(props)

  return (
    <>
      <label htmlFor={ props.id || props.name }>{ label }</label>
      <input className='form-control' type={ type } { ...field } { ...props } />
      <ErrorMessage className="text-sm text-red-500 font-medium" name={ props.name } component='span' />

      {/* {
            meta.touched && meta.error && (
               <span className='error'>{ meta.error }</span>
            )
         } */}
    </>
  )
}