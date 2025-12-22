import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { FormValues } from '../../types/prompt'

interface FormState {
  formData: Partial<FormValues>
  lockedFields: string[]
  setFormData: (data: Partial<FormValues>) => void
  updateFormData: (data: Partial<FormValues>) => void
  setLockedFields: (fields: string[]) => void
  toggleFieldLock: (fieldPath: string) => void
  resetForm: () => void
}

export const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      formData: {},
      lockedFields: [],
      
      setFormData: (data) => set({ formData: data }),
      
      updateFormData: (data) => set((state) => ({
        formData: { ...state.formData, ...data }
      })),
      
      setLockedFields: (fields) => set({ lockedFields: fields }),
      
      toggleFieldLock: (fieldPath) => set((state) => {
        const isLocked = state.lockedFields.includes(fieldPath)
        return {
          lockedFields: isLocked
            ? state.lockedFields.filter(f => f !== fieldPath)
            : [...state.lockedFields, fieldPath]
        }
      }),
      
      resetForm: () => set({ formData: {}, lockedFields: [] }),
    }),
    {
      name: 'prompt-builder-storage',
    }
  )
)


