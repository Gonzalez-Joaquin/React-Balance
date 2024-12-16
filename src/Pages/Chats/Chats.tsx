import { DefaultLayout } from '../../Layouts'
import { Avatar, Card, Loader } from '../../Components'
import style from './Chats.module.css'
import { useChats } from './Hooks'

const activeUser = '3da489ea-1e3e-4aa1-82bf-d4a957edc300'

const Chats = () => {
  const { loading, chat, title, messages, users } = useChats()

  if (loading) {
    return <Loader />
  }

  return (
    <DefaultLayout>
      <div className={style.container}>
        <div className={style.header}>
          <h3>{title}</h3>
        </div>
        <div className={style.body}>
          {messages.map((msg) => {
            const sender = users.find((user) => user.id === msg.sender)
            const isSender = sender?.id === activeUser

            console.log(sender)

            return (
              <Card
                key={msg.id}
                className={style.message}
                styles={{ marginRight: isSender ? '' : 'auto' }}>
                <Avatar
                  user={{
                    name: sender?.name || 'No se encontró',
                    pic: sender?.character.image,
                  }}
                />
                <p>{msg.content}</p>
              </Card>
            )
          })}
        </div>
        <div className={style.footer}></div>
      </div>
    </DefaultLayout>
  )
}

export default Chats
