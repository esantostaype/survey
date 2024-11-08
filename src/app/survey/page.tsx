import { MainButton, Steps } from '@/components'
import { Step1 } from './steps/Step1'

export default function SurveyPage() {
  return (
    <div className="flex items-start flex-1 gap-16">
      <div className="flex-[2] sticky top-16">
        <Steps/>
      </div>
      <div className="flex-[6]">
        <Step1/>
        <div className="mt-12 flex justify-end">
          <MainButton label='Continue'/>
        </div>
      </div>
    </div>
  )
}