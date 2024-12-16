import { useEffect, useState } from 'react'
import style from './ToggleTheme.module.css'

const ToggleTheme = () => {
  const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
  const [theme, setTheme] = useState<'light' | 'dark'>(storedTheme || 'light')

  const handleChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme')
    document.body.classList.add(`${theme}-theme`)
  }, [theme])

  return (
    <div className={style['checkbox-wrapper-54']}>
      <label className={style.switch}>
        <input
          type='checkbox'
          onChange={handleChange}
          checked={theme === 'dark'}
        />
        <span className={style.slider}></span>
      </label>
    </div>
  )
}

export default ToggleTheme
