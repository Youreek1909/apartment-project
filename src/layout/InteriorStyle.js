import React from 'react'
import { FaChevronUp, FaTimes, FaInfo } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import InteriorSidebar from '../components/InteriorSidebar'

export default function InteriorStyle() {
  const style = useSelector(state => state.style);
  const sidebar = useSelector(state => state.sidebar);
  const [desc, setDesc] = React.useState(true);

  const closeDescription = () => {
    document.querySelector('.description').style.display = 'none'
  }

  const toggleDescription = () => {
    document.querySelector('.description').classList.toggle('description--open')
    document.querySelector('.description--full__icon').classList.toggle('description--full__icon--rotate')
  }

  return (
    <React.Fragment>
      <Nav page={sidebar ? "nav--openSidebar" : "nav--closeSidebar"} />
      <div className="interior">
        <img
          className="background"
          src={style.content}
          alt="Background" />
        {desc ?
          <div className="description">
            <div className="description--wrapper">
              <h1 className="description--heading">{style.name}</h1>
              <button
                onClick={() => setDesc(false)}
                className="description--btn">
                <FaTimes className="description--icon" />
              </button>
            </div>
            <p className="description--text">{style.description}</p>
            <button
              onClick={toggleDescription}
              className="description--full">
              <FaChevronUp className="description--full__icon" />
            </button>
          </div>
          : <button className="description--info" onClick={() => setDesc(true)}>
            <FaInfo />
          </button>
        }
        <Sidebar
          bar="Interior"
          name="Style"
          btn="Floor"
          pageLink="/floorStyle"
          pageBack="/"
          pageComp={<InteriorSidebar />}
        />
      </div>
    </React.Fragment>
  )
}
