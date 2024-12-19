import styles from './Header.module.css'
import logo from './Assets/logo.png'
interface Props {
  children?: React.ReactNode
}

const Header = ({ children }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles['header-content']}>
        <div className={styles['logo-container']}>
          <div className={styles.logo}>
            <img src={logo} alt='logo-web-app' />
          </div>
          <h1 className={styles.title}>WebChat</h1>
        </div>
        <div className={styles.child}>{children}</div>
      </div>
    </header>
  )
}

export default Header
