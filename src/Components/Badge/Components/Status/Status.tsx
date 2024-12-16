import { BadgeProps } from '../../Badge'
import styles from './Status.module.css'

const Status = ({ extra, status }: BadgeProps) => {
  return (
    <div className={styles.container}>
      <span className={`${styles.span} ${styles[status || '']} `} />
      {extra?.text ? <span className={styles.text}>{extra.text}</span> : null}
    </div>
  )
}

export default Status
