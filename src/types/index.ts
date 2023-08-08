export type Message = string
export type Score = number
export type Country = 'USA' | 'Russia'

export interface Chats {
  title: string
  recipients: Recipient[]
  messages: Message[]
}

export interface Recipient {
  name: string
  surname: string
  avatarURL: string
  country: Country
  address: string
  score: Score
}

export interface RequestParams {
  score: Score
  country: Country
}
