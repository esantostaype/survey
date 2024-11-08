import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

interface Props {
  label: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const MainButton = ({ label, onClick }: Props) => {
  return (
      <button
        onClick={ onClick }
        className='flex items-center gap-2 text-lg text-black py-3 px-8 uppercase group rounded-[4rem] font-bold bg-gradient-to-r to-accent1 from-accent2'
      >
        { label }
        <ArrowForwardRoundedIcon className='relative group-hover:ml-2 group-hover:-mr-2 transition-all' />
      </button>
  );
}