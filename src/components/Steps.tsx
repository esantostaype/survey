import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import { Step } from '@/interfaces'

interface Props {
  steps: Step[]  
}

export const Steps = ({ steps }: Props) => {
  return (
    <ol className="relative border-s-2 border-gray-200 dark:border-gray-800">
      { steps.map((step, index) => (
        <li className="mb-8 flex items-start gap-3" key={ index }>
          { step.success
            ?
            <span className="-ml-[calc(1.25rem+2px)] flex-[0_0_2.5rem] flex items-center justify-center size-10 rounded-full bg-accent1 text-black">
              <CheckRoundedIcon/>
            </span>
            : 
            <span className={`-ml-[calc(1.25rem+2px)] flex-[0_0_2.5rem] flex items-center justify-center size-10 rounded-full ${ step.active ? 'bg-black text-accent1 border border-accent1' : 'bg-gray-800'}`}
            >
              { step.icon }
            </span>
          }
          <div>
            <h3 className={`leading-tight mb-1 font-semibold ${ step.active && !step.success ? "text-accent1" : "" }`}>{ step.title }</h3>
            <span className="text-gray-400 text-sm leading-tight block">
              { step.description }
            </span>
          </div>
        </li>
      ))}
    </ol>
  )
}
