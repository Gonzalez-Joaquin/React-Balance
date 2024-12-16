import { BadgeProps } from '../../Badge'

import styles from './Notification.module.css'

const Notification = ({ status, extra }: BadgeProps) => {
  return (
    <div className={`${styles.container} ${extra && extra.text ? styles.extra : ''}`}>
      <div
        className={`${styles.notification} ${styles[status || 'error']} ${
          extra && extra.text ? styles.extra : ''
        }`}></div>
      {extra ? (
        extra.pic ? (
          <div className={styles['profile-pic']}>
            <img src={extra.pic} alt={'profile-pic'} />
          </div>
        ) : (
          <span>{extra.text}</span>
        )
      ) : (
        <div className={styles['container-svg']}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.425 17.065L19.255 16.915C18.7727 16.4853 18.3506 15.9925 18 15.45C17.6171 14.7013 17.3876 13.8836 17.325 13.045V10.575C17.3283 9.25782 16.8505 7.98475 15.9814 6.995C15.1122 6.00525 13.9116 5.36694 12.605 5.20001V4.55501C12.605 4.37798 12.5347 4.2082 12.4095 4.08302C12.2843 3.95784 12.1145 3.88751 11.9375 3.88751C11.7605 3.88751 11.5907 3.95784 11.4655 4.08302C11.3403 4.2082 11.27 4.37798 11.27 4.55501V5.21001C9.97512 5.38898 8.78898 6.03114 7.93126 7.01757C7.07354 8.00399 6.60236 9.26783 6.60499 10.575V13.045C6.54237 13.8836 6.31288 14.7013 5.92999 15.45C5.58544 15.9912 5.17009 16.4839 4.69499 16.915L4.52499 17.065V18.475H19.425V17.065Z"
              fill="#1A141F"
            />
            <path
              d="M10.66 19C10.7038 19.3169 10.8609 19.6073 11.1021 19.8175C11.3434 20.0276 11.6525 20.1434 11.9725 20.1434C12.2925 20.1434 12.6016 20.0276 12.8429 19.8175C13.0841 19.6073 13.2412 19.3169 13.285 19H10.66Z"
              fill="#1A141F"
            />
          </svg>
        </div>
      )}
    </div>
  )
}

export default Notification
