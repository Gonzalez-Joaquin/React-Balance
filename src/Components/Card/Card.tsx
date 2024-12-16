import style from './Card.module.css'

interface Props {
  id?: string
  className?: string
  children?: React.ReactNode
  styles?: React.CSSProperties
}

const Card = ({ id, styles, className, children }: Props) => {
  return (
    children && (
      <div
        id={id}
        className={`${style.card} ${className ?? ''}`}
        style={{ ...styles }}>
        {children}
      </div>
    )
  )
}

export default Card
