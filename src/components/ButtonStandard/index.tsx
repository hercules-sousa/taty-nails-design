import "./style.css"

interface StandardButtonProps {
  label: string
}

const StandardButton = (props: StandardButtonProps) => {
  const { label } = props
  return (
    <button className="standard-button">
      <h2>{label}</h2>
    </button>
  )
}

export default StandardButton