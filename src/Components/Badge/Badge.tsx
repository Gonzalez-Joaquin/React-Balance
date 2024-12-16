import { Notification, Status } from './Components'

type ExtraWithPic = {
  pic: string
  text?: never
}

type ExtraWithText = {
  pic?: never
  text: string
}

export interface BadgeProps {
  type?: 'notification' | 'status'
  status?: 'error' | 'warning' | 'success' | 'processing'
  extra?: ExtraWithPic | ExtraWithText
}

const Badge = ({
  type = 'notification',
  status = 'error',
  extra,
}: BadgeProps) => {
  const props = { type, status, extra }
  return type === 'notification' ? (
    <Notification {...props} />
  ) : (
    <Status {...props} />
  )
}

export default Badge
