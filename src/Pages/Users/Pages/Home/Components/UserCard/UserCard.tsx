import { UserWithCharacter } from '../../../../../../@types'
import { Badge, Button, Card, Tag } from '../../../../../../Components'
import style from './UserCard.module.css'

interface Props {
  user: UserWithCharacter
}

const UserCard = ({ user }: Props) => {
  return (
    <Card className={style.card}>
      <div className={style.header}>
        <Tag label={user.character.species} />
        <Badge status={user.active ? 'success' : 'error'} />
      </div>
      <div className={style.body}>
        <div className={style.image}>
          <img src={user.character.image} alt={`image-${user.character.id}`} />
        </div>
      </div>
      <div className={style.footer}>
        <h4 className={style['footer-name-surname']}>
          {user.name} {user.surname}
        </h4>
        <Button className={style.button} icon={'comment'} unfilled />
      </div>
    </Card>
  )
}

export default UserCard
