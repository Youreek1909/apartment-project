import React from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import Button from '../components/Button'
import ButtonBack from '../components/ButtonBack'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar } from '../actions'
import { Link } from 'react-router-dom'

export default function Sidebar({ bar, name, btn, pageLink, pageComp, pageBack }) {
  const sidebar = useSelector(state => state.sidebar);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className="sidebar">
        <button onClick={() => dispatch(toggleSidebar())} className="toggle">
          {sidebar ? 
          <FaChevronRight className="toggle--icon" /> :
          <FaChevronLeft className="toggle--icon" />
          }
          <p>{bar} </p>
        </button>
        {sidebar ?
          <div className="styles">
            <div className="styles--wrapper">
              <div className="styles--wrapper__name">
                {name}
              </div>
              <div className="styles--wrapper__price">
                <p>Options <span>0</span></p>
                <p>CHF <span>1&#39;200&#39;000</span></p>
              </div>
            </div>
            <div className="styles--items">
              {pageComp}
            </div>
            <div className="btn--wrapper">
              <Link to={pageBack}>
                <ButtonBack />
              </Link>
              <Link to={pageLink}>
                <Button text={btn} />
              </Link>
            </div>
          </div>
          : null}
      </div>
    </React.Fragment>
  )
}
