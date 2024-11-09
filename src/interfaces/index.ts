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
  q3: string
  q4: string
}

export interface FormValuesStep2 {
  q5: string
  q6: string
  q7: string[]
  q7Other?: string
  q8: string
  q9: string
}

export interface FormValuesStep3 {
  q10: string
}