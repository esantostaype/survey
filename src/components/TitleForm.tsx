interface Props {
  title: string
}

export const TitleForm = ({ title }: Props) => {
  return (
    <h2 className="text-4xl mb-8 font-semibold">{ title }</h2>
  )
}