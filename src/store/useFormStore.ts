import { IFormState } from "@/components"
import { create } from "zustand"

interface FormState {
  form: IFormState
  setForm: (form: any) => void
  resetFormState: () => void
}

const initialState = {
  cardNumber: "",
  cardHolder: "",
  month: "",
  year: "",
  cvv: ""
}

export const useFormStore = create<FormState>((set) => ({
  form: { ...initialState },
  setForm: (value) => set((state: FormState) => ({ form: { ...state.form, ...value } })),
  resetFormState: () => set((state: FormState) => ({ form: { ...initialState } })),
}))