interface Props {
  icon: string
  style?: React.CSSProperties
  className?: string
}

const Icon = ({ icon, style, className }: Props) => {
  return <i className={`${className} fi fi-rr-${icon} `} style={style} />
}

export default Icon
