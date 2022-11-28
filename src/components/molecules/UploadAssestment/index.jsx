import { QuestionLabel, UploadDropImage } from "components/atoms";

import React from 'react'

const UploadAssesment = ({ questionNumber, question, descDisabled }) => {
  return (
    <div>
      <QuestionLabel questionNumber={questionNumber} question={question} descDisabled={descDisabled || false} />
      <div className="mt-5 flex items-center space-x-4">
        <UploadDropImage />
        <UploadDropImage />
        <UploadDropImage />
      </div>
    </div>
  )
}

export default UploadAssesment
