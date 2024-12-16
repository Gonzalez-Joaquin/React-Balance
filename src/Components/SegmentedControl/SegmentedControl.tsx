import React, { useRef, useState } from 'react'
import style from './SegmentedControl.module.css'

interface Props {
  children: React.ReactNode
  onChange?: (index: number) => void
}

const SegmentedControl = ({ children, onChange }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsCount = React.Children.count(children)

  const handleClick = (index: number) => {
    setActiveIndex(index)
    if (onChange) onChange(index)
  }

  return (
    <div
      className={style.container}
      ref={containerRef}
      style={{ '--items': itemsCount } as React.CSSProperties}>
      <ul className={style.list}>
        {React.Children.map(children, (child, index) => (
          <li
            className={`${style.item} ${
              index === activeIndex ? style.active : ''
            }`}
            onClick={() => handleClick(index)}>
            {child}
          </li>
        ))}
      </ul>
      <div
        className={style.indicator}
        style={{
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
    </div>
  )
}

export default SegmentedControl
