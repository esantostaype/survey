import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded'
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded'
import AdsClickRoundedIcon from '@mui/icons-material/AdsClickRounded'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

const steps = [
  {
    "title": "Company",
    "description": "General Company Information",
    "icon": <BusinessRoundedIcon fontSize="small"/>,
    "active": true,
    "success": false
  },
  {
    "title": "Digital Presence",
    "description": "Current Digital Presence",
    "icon": <LanguageRoundedIcon fontSize="small"/>,
    "active": false,
    "success": false
  },
  {
    "title": "Digital Needs",
    "description": "Digital Needs and Preferences",
    "icon": <AdsClickRoundedIcon fontSize="small"/>,
    "active": false,
    "success": false
  },
  {
    "title": "Perceptions",
    "description": "Perceptions of the Market and Competition",
    "icon": <BusinessCenterOutlinedIcon fontSize="small"/>,
    "active": false,
    "success": false
  },
  {
    "title": "Budget",
    "description": "Budget and Purchase Decision",
    "icon": <AttachMoneyOutlinedIcon fontSize="small"/>,
    "active": false,
    "success": false
  },
  {
    "title": "Final",
    "description": "Information Channels and Additional Comments",
    "icon": <InfoOutlinedIcon fontSize="small"/>,
    "active": false,
    "success": false
  }
]

export const Steps = () => {
  return (
    <ol className="relative border-s-2 border-gray-200 dark:border-gray-800">
      { steps.map( ( step, index ) => (        
        <li className="mb-8 flex items-start gap-3" key={ index }>
          <span className={`-ml-[calc(1.25rem+2px)] flex-[0_0_2.5rem] flex items-center justify-center size-10 rounded-full ${ step.active ? "bg-accent1 text-black" : "bg-gray-800" }`}>
            { step.icon }
          </span>
          <div>
            <h3 className="font-medium leading-tight mb-1">{ step.title }</h3>
            <span className="text-gray-500 text-sm leading-tight block">{ step.description }</span>
          </div>
        </li>
      ))}
    </ol>
  )
}