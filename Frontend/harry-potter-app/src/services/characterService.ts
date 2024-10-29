//characterService.ts
import type { Character } from '@/interfaces/Character'
import axios from 'axios'

export async function getCharacterByIndex(index: number): Promise<Character> {
  const response = await axios.get<Character>(
    `https://potterapi-fedeperin.vercel.app/es/characters?index=${index}`,
  )
  return response.data
}

export async function searchCharacterByName(name:string): Promise<Character[]> {
  const response = await axios.get<Character []>(
    `https://potterapi-fedeperin.vercel.app/es/characters?search=${name}`
  );
  return response.data;
}

export async function getAllCharacters(): Promise<Character[]>{
  const response = await axios.get<Character[]>(
    `https://potterapi-fedeperin.vercel.app/es/characters`
  );
  return response.data;
}

