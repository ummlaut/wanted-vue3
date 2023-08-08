import { api } from '@/api/api'
import { Chats, RequestParams } from '@/types'

export async function getChats(params?: Partial<RequestParams>) {
  return (
    await api.get<Chats[]>('/chats', {
      params,
    })
  ).data
}
