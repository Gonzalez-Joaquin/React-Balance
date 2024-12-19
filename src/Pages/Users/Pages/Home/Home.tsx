import { useEffect, useState } from 'react'
import axios from 'axios'

import { CharacterDTO, UserDTO, UserWithCharacter } from '../../../../@types'
import { Loader } from '../../../../Components'
import { UserCard } from './Components'
import style from './Home.module.css'
import API from '../../../../Api'

const Home = () => {
  const user: UserDTO = JSON.parse(sessionStorage.getItem('user') as string)
  const [users, setUsers] = useState<Array<UserWithCharacter>>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchCharacters = async () => {
    try {
      const { data: usersList }: { data: Array<UserDTO> } = await API.get(
        '/users'
      )

      const allIds = usersList
        .map((user) => Number(user.characterID))
        .filter(Boolean)

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
            {users.map(
              (item) =>
                item.id !== user.id && <UserCard user={item} key={item.id} />
            )}
          </div>
        </article>
      )}
    </section>
  )
}

export default Home
