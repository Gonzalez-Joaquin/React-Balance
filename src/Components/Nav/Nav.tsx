import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import { routes } from '../../Routes/routes'
import style from './Nav.module.css'
import { Icon } from '..'

const Nav = () => {
  const [open, setOpen] = useState<boolean>(false)

  const toggle = (param?: boolean) => {
    if (typeof param !== 'boolean') {
      return setOpen(!open)
    }

    setOpen(param)
  }

  return (
    <nav className={style.nav}>
      <div className={style['nav-list']}>
        {routes.map(({ path, icon, name, navOmit }, index) => {
          return (
            !navOmit && (
              <NavLink
                to={path}
                key={index}
                className={({ isActive }) =>
                  !isActive
                    ? style['nav-item']
                    : `${style['nav-item']} ${style.active}`
                }
                onClick={() => toggle(false)}>
                <div className={style['icon-container']}>
                  {typeof icon === 'string' ? (
                    <Icon icon={icon} />
                  ) : (
                    <div className={style['icon-svg']}>{icon}</div>
                  )}
                </div>

                <span className={style.label}>{name}</span>
              </NavLink>
            )
          )
        })}
      </div>
    </nav>
  )
}

export default Nav
