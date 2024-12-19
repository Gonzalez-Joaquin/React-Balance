interface UserDTO {
  id: string
  name: string
  surname: string
  username: string
  password: string
  characterID: string
  timestamp: number
}

interface CharacterDTO {
  id: number
  image: string
  name: string
  species: string
}

type UserWithCharacter = Omit<UserDTO, 'characterID'> & {
  character: CharacterDTO
  active: boolean
}

interface ChatDTO {
  id: string
  name?: string
  isGroup: boolean
  participants: Array<string>
  lastMessage?: MessageDTO
}

interface MessageDTO {
  id: string
  sender: string
  content: string
  timestamp: number
  chatId: string
}

interface CallDTO {
  idCall: string
  user: {
    id: string
    ready: boolean
  }
  asesor: {
    id: string
    ready: boolean
  }
  status: 'pending' | 'ongoing' | 'completed'
  timestamp: string
}

export type {
  UserDTO,
  CharacterDTO,
  UserWithCharacter,
  ChatDTO,
  MessageDTO,
  CallDTO,
}
