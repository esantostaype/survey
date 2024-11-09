import { Steps } from '@/components'

export default function SurveyLayout({ children } : Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex items-start flex-1 gap-16">
      <div className="flex-[2] sticky top-16">
        <Steps/>
      </div>
      <div className="flex-[6]">
        { children }
      </div>
    </div>
  )
}