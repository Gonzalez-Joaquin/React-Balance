import { useNavigate } from 'react-router-dom'
import { UserWithCharacter } from '../../../../../../@types'
import { Button, Card, Tag } from '../../../../../../Components'
import style from './UserCard.module.css'

interface Props {
  user: UserWithCharacter
}

const UserCard = ({ user }: Props) => {
  const navigate = useNavigate()

  return (
    <Card className={style.card}>
      <div className={style.header}>
        <Tag label={user.character.species} />
        <div style={{ display: 'flex' }}>
          <Button
            className={style.button}
            icon={'call-outgoing'}
            unfilled
            onClick={() => navigate(`/Calls/Client/${user.id}`)}
          />
          <Button
            className={style.button}
            icon={'call-outgoing'}
            unfilled
            onClick={() => navigate(`/Calls/Assesor/${user.id}`)}
          />
        </div>
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
        <Button
          className={style.button}
          icon={'comment'}
          unfilled
          onClick={() => navigate(`/Chats/${user.id}`)}
        />
      </div>
    </Card>
  )
}

export default UserCard
