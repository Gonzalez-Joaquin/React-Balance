import { useState, useEffect } from 'react'
import axios from 'axios'

import { UserWithCharacter, CharacterDTO } from '../../../@types'
import usersList from '../../Users/Pages/Home/Data'
import { chat, messages } from '../Data'

const activeUser = '3da489ea-1e3e-4aa1-82bf-d4a957edc300'

const useChats = () => {
  const [users, setUsers] = useState<Array<UserWithCharacter>>([])
  const [title, setTitle] = useState<string>('Sin seleccionar')
  const [loading, setLoading] = useState<boolean>(true)

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
      setLoading(false)
    }
  }

  useEffect(() => {
    if (users.length > 0 && chat && !chat.isGroup) {
      const user = users.find((user) => user.id !== activeUser)
      setTitle(user?.name || 'No se encontró un usuario')
    }
  }, [chat, users])

  useEffect(() => {
    fetchCharacters()
  }, [])

  return { loading, users, chat, title, messages }
}

export default useChats
