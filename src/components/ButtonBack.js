import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'

export default function ButtonBack() {
  return (
    <React.Fragment>
      <div className="buttons">
        <button className="btn btn--back">
          <FaAngleLeft className="btn--icon btn--icon__back" />
          <span>Back</span>
        </button>
      </div>

    </React.Fragment>
  )
}
