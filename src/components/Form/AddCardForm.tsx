"use client"

import { Formik, Form } from "formik"
import * as Yup from "yup"
import { MySelect, MyTextInput } from "."

const inputClass = `p-2 border-gray-400 w-full inline-flex border-opacity-50 
text-slate-700 disabled:text-opacity-60 font-medium rounded-lg text-sm`

const selectClass = `
w-full text-slate-700 disabled:text-opacity-60 border-gray-400 
border-opacity-50 rounded-lg text-sm font-medium`

const AddCardForm = () => {

  {/* //TODO: Card number encrypted, ex: 41**********1234 */}

  return (
    <section className="w-full h-full md:w-[370px] mt-48">
      {/* className="w-full h-full relative flex flex-col justify-start gap-y-4" */}
      <Formik
        initialValues={{
          cardNumber: "",
          cardHolder: "",
          month: "",
          year: "",
          cvv: ""
        }}
        onSubmit={( values ) => {
          console.log( values )
        }}
        validationSchema={
          Yup.object({
            cardNumber: Yup.string()
              .matches(/^[0-9]+$/, "Only numbers are allowed")
              .max(16, "This field should be 16 characters maximum")
              .min(16, "This field should be 16 characters minimum")
              .required("This field is required"),
            cardHolder: Yup.string()
              .matches(/^[a-zA-Z\s]+$/, "Only letters are allowed")
              .max(20, "This field should be 20 characters or less")
              .required("This field is required"),
            cvv: Yup.string()
              .max(3, "This field should be 3 characters maximum")
              .min(3, "This field should be 3 characters minimum")
              .matches(/^[0-9]+$/, "Only numbers are allowed")
              .required("Required"),
            year: Yup.string()
              .required("Required"),
            month: Yup.string()
              // .notOneOf([ "it-jr" ], "This option is not allowed")
              .required("Required")
          })
        }
      >
        {
          ( { isValid, isSubmitting } ) => (
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

              <div className="flex flex-col w-full gap-y-2">
                <div className="flex gap-x-4">
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
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
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
