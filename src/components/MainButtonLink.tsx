'use client'
import { useRouter } from 'next/navigation'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { Button } from '@mui/material'

interface Props {
  label: string
  path: string
}

export const MainButtonLink = ({ label, path }: Props) => {
  const router = useRouter()
  return (
    <Button
      onClick={() => router.push(`${ path }`)}
      variant='contained'
      size='large'
      className='text-lg py-3 px-8 group rounded-[4rem] font-bold bg-gradient-to-r to-accent1 from-accent2'
      endIcon={
        <ArrowForwardRoundedIcon className='relative group-hover:ml-2 group-hover:-mr-2 transition-all' />
      }
    >
      { label }
    </Button>
  )
}