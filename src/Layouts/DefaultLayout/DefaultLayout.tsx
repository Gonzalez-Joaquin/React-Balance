import { Header, Main, Nav, ToggleTheme } from '../../Components'
import styles from './DefaultLayout.module.css'

interface Props {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className={styles['default-layout']}>
      <Header>
        <ToggleTheme />
      </Header>
      <div className={styles['default-content']}>
        <Nav />
        <Main>{children}</Main>
        {/* <Aside /> */}
      </div>
    </div>
  )
}

export default DefaultLayout
