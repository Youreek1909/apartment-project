import React from 'react'
import { FaCheck } from 'react-icons/fa'

export default function Button({ text, page }) {
  return (
    <React.Fragment>  
        <button className={`btn ${page}`}>
          <FaCheck className="btn--icon btn--icon__check" />
          {text}
        </button>
    </React.Fragment>
  )
}
