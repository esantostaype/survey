interface Props {
  label: string
}

export const LabelForm = ({ label }: Props) => {
  return (
    <h3 className='mt-12 mb-4 text-xl font-bold'>{ label }</h3>
  )
}