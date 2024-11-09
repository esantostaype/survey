import { ReactNode } from 'react'

export interface Step {  
  title: string
  description: string
  path: string
  icon: ReactNode
  success: boolean
}

export interface FormValuesStep1 {
  q1: string[]
  q1Other?: string
  q2: string
  q3State: string
  q3City: string
}

export interface FormValuesStep2 {
  q4: string
  q5: string
  q6: string[]
  q6Other?: string
  q7: string
  q8: string
}

export interface FormValuesStep3 {
  q9: string
  q10: string[]
  q10Other?: string
  q11: string[]
  q12: string
  q12Explain?: string
  q13: string
  q14: string
  q14Explain?: string
}