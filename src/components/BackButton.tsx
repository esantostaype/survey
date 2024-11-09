'use client'
import { useRouter } from 'next/navigation'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import Link from 'next/link'

interface Props {
  label: string
  path: string
}

export const BackButton = ({ label, path }: Props) => {
  const router = useRouter()
  return (
      <Link
        href={ path }
        className='flex items-center gap-2 text-accent1 uppercase group font-bold transition-all'
      >
        <div className='relative group-hover:mr-2 group-hover:-ml-2 transition-all'>
          <ArrowBackRoundedIcon/>
        </div>
        { label }
      </Link>
  );
}