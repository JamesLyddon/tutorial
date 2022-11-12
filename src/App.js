import { useState } from 'react'
import FlashcardList from '../FlashcardList'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return <FlashcardList flashcards={flashcards} />
}

export default App

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is your name?',
    answer: 'Sir Galahad',
    options: ['Sir Galahad', 'Sir Lancealot', 'King Arthur'],
  },
  {
    id: 2,
    question: 'What is your quest?',
    answer: 'I seek the Grail',
    options: ['I seek the Grail', 'To buy 10 fags', 'A VR headset?', 'To buy a vest'],
  },
  {
    id: 3,
    question: 'What is your favourite colour?',
    answer: 'yellow',
    options: ['red', 'blue', 'yellow'],
  },
]
