import type { Character } from '@/interfaces/Character'
import axios from 'axios'

export async function getCharacterByIndex(index: number): Promise<Character> {
  const response = await axios.get<Character>(
    `https://potterapi-fedeperin.vercel.app/es/characters?index=${index}`,
  )
  return response.data
}
