import React from 'react'
import Sidebar from '../components/Sidebar'
import { useSelector, useDispatch } from 'react-redux'
import Nav from '../components/Nav'
import FloorSidebar from '../components/FloorSidebar'
import { toggleSidebar } from '../actions'
import icon from '../images/icons/edit_style.svg'


export default function FloorStyle() {
  const sidebar = useSelector(state => state.sidebar);
  const floor = useSelector(state => state.floor);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Nav page={sidebar ? "nav--openSidebar" : "nav--closeSidebar"} />
      <div className="floor">
        <img className="background" src={floor.content} alt={floor.name} />
        <button className="btn--edit btn--edit__floor"
          onClick={() => !sidebar ? dispatch(toggleSidebar()) : null}>
          <img src={icon} />
        </button>
      </div>
      <Sidebar
        bar="Floor"
        name="Floor"
        btn="Kitchen"
        pageLink="/kitchen"
        pageBack="/interiorstyle"
        pageComp={<FloorSidebar />}
      />
    </React.Fragment>
  )
}
