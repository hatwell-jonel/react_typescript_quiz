import React from 'react'

type Props = {
    question: string;
    answer: string[];
    callback: any;
    userAnswer: string;
    questionNr: number;
    totalQuestions: number;
}

function QuestionCard: React.FC<Props> ({question}) {
  return (
    <div>{QuestionCard}</div>
  )
}

export default QuestionCard