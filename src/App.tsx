import React, { useState } from 'react'
import QuestionCard from './components/QuestionCard'

function App() {

  const startTrivia = async () => {

  } 

  const checkAnswer = (e: React.MouseEvent) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className='App'>
      <h1>React Quiz</h1>
      <button className='start' onClick={startTrivia}>start</button>

      <p className='score'>Score: </p>
      <p>Loading Questions...</p>

      <QuestionCard />

      <button className='next' onClick={nextQuestion}>Next Question</button>
    </div>
  )
}

export default App
