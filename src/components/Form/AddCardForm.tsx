"use client"

import { Formik, Form } from "formik"
import * as Yup from "yup"
import { MySelect, MyTextInput } from "."

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
              .max(16, "This field should be 16 characters or less")
              .matches(/^[0-9]+$/, "Only numbers are allowed")
              .required("This field is required"),
            cardHolder: Yup.string()
              .max(20, "This field should be 20 characters or less")
              .matches(/^[a-zA-Z\s]+$/, "Only letters are allowed")
              .required("This field is required"),
            cvv: Yup.string()
              .max(3, "This field should be 3 characters or less")
              .min(3, "This field should be 3 characters or less")
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
          ( formik ) => (
            <Form className="w-full h-full relative flex flex-col justify-start gap-y-4">
              <MyTextInput 
                className="p-2 border-gray-400 w-full inline-flex border-opacity-50 text-black font-medium rounded-lg text-sm"
                label='Card Number' 
                name='cardNumber'
                placeholder='Type the card number' 
              />

              <MyTextInput 
                className="p-2 border-gray-400 w-full inline-flex border-opacity-50 text-black font-medium rounded-lg text-sm"
                label='Card Holder Name' 
                name='cardHolder'
                placeholder='Type the card holder name' 
              />

              <div className="flex flex-col w-full gap-y-2">
                <div className="flex gap-x-4">
                  <div className="w-1/3">
                    <MyTextInput 
                      className="p-2 border-gray-400 w-full inline-flex border-opacity-50 text-black font-medium rounded-lg text-sm"
                      label='CVV' 
                      name='cvv'
                    />
                  </div>
                  <div className="w-1/3">
                    <MySelect 
                      label='Month' 
                      name='month'
                      className="w-full font-bold text-slate-700 text-opacity-60 border-gray-400 
                      border-opacity-50 rounded-lg text-sm"  >
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
                      label='Year' 
                      name='year'  
                      className="w-full font-bold text-slate-700 text-opacity-60 border-gray-400 
                      border-opacity-50 rounded-lg text-sm" >
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
                  className="bg-gray-200 text-gray-500 text-opacity-40 rounded-xl w-[31.5%] py-3 px-2 font-bold text-sm"
                >Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white rounded-xl w-[70%] py-3 px-2 font-bold text-sm"
                >Add Card
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
