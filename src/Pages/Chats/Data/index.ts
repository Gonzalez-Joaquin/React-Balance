import { ChatDTO, MessageDTO } from '../../../@types'

const chat: ChatDTO = {
  id: 'chat-001',
  isGroup: false,
  participants: [
    '3da489ea-1e3e-4aa1-82bf-d4a957edc300',
    '3da489ea-1e3e-4aa1-82bf-d4a957edc373',
  ],
  lastMessage: {
    id: 'msg-003',
    sender: '3da489ea-1e3e-4aa1-82bf-d4a957edc300',
    content: '¿Cómo va el tema de los documentos?',
    timestamp: 1702473300000,
    chatId: 'chat-001',
  },
}

const messages: Array<MessageDTO> = [
  {
    id: 'b6e56a1f-8e3c-41bb-9f0a-bf330354c0f1',
    sender: '3da489ea-1e3e-4aa1-82bf-d4a957edc373',
    content:
      'Che Joaquín, viste el encuentro de autos tuning en Mar del Plata el finde pasado?',
    timestamp: 1702471200000,
    chatId: 'chat-001',
  },
  {
    id: 'd5a7b5e4-9f27-4d7a-bd3a-9f4120c4a1f2',
    sender: '3da489ea-1e3e-4aa1-82bf-d4a957edc300',
    content:
      'Sí, una locura los autos que llevaron. ¿Viste el 147 con el motor turbo? Increíble.',
    timestamp: 1702471800000,
    chatId: 'chat-001',
  },
  {
    id: 'a4c9f7b7-3f48-4c3f-bd6e-84b3c374d0e3',
    sender: '3da489ea-1e3e-4aa1-82bf-d4a957edc373',
    content:
      '¡Sí! El detalle del escape y el alerón trasero estaba tremendo. Re bien logrado.',
    timestamp: 1702472400000,
    chatId: 'chat-001',
  },
  {
    id: 'f8d6c37b-25cf-4b99-9a3b-d0f43f5c2baf',
    sender: '3da489ea-1e3e-4aa1-82bf-d4a957edc300',
    content:
      'Y ni hablar de la iluminación LED. Le daba una onda medio futurista, pero sin perder el estilo clásico.',
    timestamp: 1702472700000,
    chatId: 'chat-001',
  },
  {
    id: 'e7b9f1d4-6c2e-411d-a2eb-0f74b5b6f0c4',
    sender: '3da489ea-1e3e-4aa1-82bf-d4a957edc373',
    content:
      '¿Sabías que el dueño lo armó todo en su casa? Lo estuvo trabajando por dos años.',
    timestamp: 1702473000000,
    chatId: 'chat-001',
  },
  {
    id: 'c1d9b4e8-3f59-4b6b-bd9a-15b47e6f7c2d',
    sender: '3da489ea-1e3e-4aa1-82bf-d4a957edc300',
    content:
      '¿En serio? Qué dedicación. Se nota que los autos tuning son pura pasión acá en Argentina.',
    timestamp: 1702473300000,
    chatId: 'chat-001',
  },
  {
    id: 'f7a8c5e9-6f47-4d5b-8c1a-0c374d6e5a2d',
    sender: '3da489ea-1e3e-4aa1-82bf-d4a957edc373',
    content:
      'Totalmente. Aparte, lo lindo es que no solo es cuestión de mostrar, sino de compartir con otros amantes del tuning.',
    timestamp: 1702473600000,
    chatId: 'chat-001',
  },
  {
    id: 'e9f8d4a7-3f61-4b3f-bc2e-87b2d6e4a1f3',
    sender: '3da489ea-1e3e-4aa1-82bf-d4a957edc300',
    content:
      'Sí, eso es lo mejor. Lo próximo es el evento de La Plata, ¿no? ¿Vas a ir?',
    timestamp: 1702473900000,
    chatId: 'chat-001',
  },
  {
    id: 'a6b9c8f7-4f48-4d3c-bc5a-9f3e5d6c7baf',
    sender: '3da489ea-1e3e-4aa1-82bf-d4a957edc373',
    content:
      'Obvio, no me lo pierdo por nada. Dicen que van a estar algunos de los mejores fierros del país.',
    timestamp: 1702474200000,
    chatId: 'chat-001',
  },
  {
    id: 'c5f7b3e9-9f26-4b4b-a1c8-5d6c7b9f3a4e',
    sender: '3da489ea-1e3e-4aa1-82bf-d4a957edc300',
    content: 'Perfecto, coordinemos para ir juntos. ¡Va a estar espectacular!',
    timestamp: 1702474500000,
    chatId: 'chat-001',
  },
]

export { chat, messages }
