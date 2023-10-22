"use client"

import { Formik, Form } from "formik"

import { IFormState, MySelect, MyTextInput } from "."
import { useFormStore } from "@/store"

import { initialState, validationSchema, inputClass, selectClass } from "./FormAssets"

const AddCardForm = () => {

  const form = useFormStore(x => x.form)

  const handleSubmit = async ( values : IFormState ) => {
    
    alert( "Card added successfully!")

    const resp = await fetch("/api/cards", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
    
    resp.json().then((data) => {

      console.log(data)
    })
  }

  
  return (
    <section className="w-full h-full sm:w-[370px] mt-48">
      
      <Formik
        initialValues={initialState}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {( { isValid, isSubmitting } ) => (
          <Form className="w-full h-full relative flex flex-col justify-start gap-y-4">
              
            <MyTextInput 
              disabled={isSubmitting}
              className={inputClass}
              label='Card Number' 
              name='cardNumber'
              placeholder='Type the card number' 
            />

            <MyTextInput 
              disabled={isSubmitting}
              className={inputClass}
              label='Card Holder Name' 
              name='cardHolder'
              placeholder='Type the card holder name' 
            />
            
            <div className="w-full flex gap-x-4">
              <div className="w-1/3">
                <MyTextInput 
                  disabled={isSubmitting}
                  className={inputClass}
                  label='CVV' 
                  name='cvv'
                  type="number"
                />
              </div>
              <div className="w-1/3">
                <MySelect 
                  disabled={isSubmitting}
                  label='Month' 
                  name='month'
                  className={selectClass} >
                  <option value=""></option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((number) => (
                    <option value={number} key={number}>
                      {number < 10 ? `0${number}` : number}
                    </option>
                  ))}
                </MySelect>
              </div>
              <div className="w-1/3">
                <MySelect 
                  disabled={isSubmitting}
                  label='Year' 
                  name='year'  
                  className={selectClass} >
                  <option value=""></option>
                  {Array.from({ length: 7 }, (_, i) => i + 22).map((number) => (
                    <option value={number} key={number}>
                      {number}
                    </option>
                  ))}
                </MySelect>
              </div>
            </div>
                              
            <div className="w-full pt-6 md:pt-0 flex gap-x-5">
              <button
                type="button"
                className="bg-gray-200 text-gray-500 text-opacity-40 rounded-xl w-[31.5%] py-3 px-2 font-bold 
                text-sm hover:bg-gray-300 transition-all duration-300 ease-in-out"
              >Cancel
              </button>
              <button
                disabled={!isValid || isSubmitting}
                type="submit"
                className="bg-indigo-600 flex items-center justify-center text-white rounded-xl w-[70%] py-3 px-2 font-bold text-sm
                disabled:bg-indigo-400 disabled:text-gray-300 disabled:cursor-not-allowed
                hover:bg-indigo-700 transition-all duration-300 ease-in-out"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                      Processing...
                  </>
                ) :
                  "Add Card"
                }
                  
              </button>
            </div>
          </Form>
        )
        }
      </Formik>
    </section>
  )
}

export default AddCardForm
