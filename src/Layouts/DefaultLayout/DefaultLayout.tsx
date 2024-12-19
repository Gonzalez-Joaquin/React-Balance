import { Header, Main, Nav, ToggleTheme } from '../../Components'
import styles from './DefaultLayout.module.css'

interface Props {
  children: React.ReactNode
  className?: string
}

const DefaultLayout = ({ children, className }: Props) => {
  return (
    <div className={styles['default-layout']}>
      <Header>
        <ToggleTheme />
      </Header>
      <div className={`${styles['default-content']} ${className ?? ''}`}>
        <Nav />
        <Main>{children}</Main>
        {/* <Aside /> */}
      </div>
    </div>
  )
}

export default DefaultLayout
