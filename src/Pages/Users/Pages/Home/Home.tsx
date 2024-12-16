import { useEffect, useState } from 'react'
import axios from 'axios'

import { CharacterDTO, UserWithCharacter } from '../../../../@types'
import { UserCard } from './Components'
import style from './Home.module.css'
import usersList from './Data'
import { Loader } from '../../../../Components'

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [users, setUsers] = useState<Array<UserWithCharacter>>([])

  const fetchCharacters = async () => {
    const allIds = usersList.map((user) => user.characterID)

    try {
      const response = await axios.get<Array<CharacterDTO>>(
        `https://rickandmortyapi.com/api/character/${allIds.join(',')}`
      )

      const characters = response.data

      const usersWithCharacters: Array<UserWithCharacter> = usersList.map(
        (user) => {
          const character = characters.find(
            (char) => char.id === parseInt(user.characterID)
          )
          return {
            ...user,
            character: character!,
            active: false,
          }
        }
      )

      setUsers(usersWithCharacters)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching characters:', error)
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <section className={style.section}>
      {loading ? (
        <Loader />
      ) : (
        <article className={style.article}>
          <h2 className={style.title}>Listado de usuarios</h2>
          <div className={style['user-list']}>
            {users.map((user) => (
              <UserCard user={user} key={user.id} />
            ))}
          </div>
        </article>
      )}
    </section>
  )
}

export default Home
