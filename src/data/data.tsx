import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded'
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded'
import AdsClickRoundedIcon from '@mui/icons-material/AdsClickRounded'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Step } from '@/interfaces'

export const stepsData: Step[] = [
  {
    title: 'Company',
    description: 'General Company Information',
    icon: <BusinessRoundedIcon fontSize="small" />,
    active: true,
    success: false
  },
  {
    title: 'Digital Presence',
    description: 'Current Digital Presence',
    icon: <LanguageRoundedIcon fontSize="small" />,
    active: false,
    success: false
  },
  {
    title: 'Digital Needs',
    description: 'Digital Needs and Preferences',
    icon: <AdsClickRoundedIcon fontSize="small" />,
    active: false,
    success: false,
  },
  {
    title: 'Perceptions',
    description: 'Perceptions of the Market and Competition',
    icon: <BusinessCenterOutlinedIcon fontSize="small" />,
    active: false,
    success: false
  },
  {
    title: 'Budget',
    description: 'Budget and Purchase Decision',
    icon: <AttachMoneyOutlinedIcon fontSize="small" />,
    active: false,
    success: false
  },
  {
    title: 'Final',
    description: 'Information Channels and Additional Comments',
    icon: <InfoOutlinedIcon fontSize="small" />,
    active: false,
    success: false
  }
]



export const states: string[] = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
  "Wisconsin", "Wyoming"
]