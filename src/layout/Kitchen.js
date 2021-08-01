import React from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import KitchenSidebar from '../components/KitchenSidebar'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar } from '../actions'
import icon from '../images/icons/edit_style.svg'
import {changeKitchenGroup, changeKitchenGroupChanged} from '../actions'


export default function Kitchen() {
  const sidebar = useSelector(state => state.sidebar);
  const kitchen = useSelector(state => state.kitchen);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Nav page={sidebar ? "nav--openSidebar" : "nav--closeSidebar"} />
      <div className="kitchen">
        <img src={kitchen.background} alt='' className="kitchen--background" />
        <button className="btn--edit btn--edit__front"  
          onClick={() => {
            if (!sidebar) {
              dispatch(toggleSidebar())
            }
            dispatch(changeKitchenGroup(1));
            dispatch(changeKitchenGroupChanged(0));
          }}
          >
          <img src={icon} alt='' style={kitchen.group === 1 ? {filter: 'hue-rotate(220deg)'} : null} />
        </button>
        <button className="btn--edit btn--edit__back"  
          onClick={() => {
            if (!sidebar) {
              dispatch(toggleSidebar())
            }
            dispatch(changeKitchenGroup(2));
            dispatch(changeKitchenGroupChanged(1));
          }}
          >
          <img src={icon} alt='' style={kitchen.group === 2 ? {filter: 'hue-rotate(220deg)'} : null} />
        </button>
        <button className="btn--edit btn--edit__cover"  
          onClick={() => {
            if (!sidebar) {
              dispatch(toggleSidebar())
            }
            dispatch(changeKitchenGroup(3));
            dispatch(changeKitchenGroupChanged(2));
          }}
          >
          <img src={icon} alt='' style={kitchen.group === 3 ? {filter: 'hue-rotate(220deg)'} : null} />
        </button>
        <button className="btn--edit btn--edit__oven"  
          onClick={() => {
            if (!sidebar) {
              dispatch(toggleSidebar())
            }
            dispatch(changeKitchenGroup(4));
            dispatch(changeKitchenGroupChanged(3));
          }}
          >
          <img src={icon} alt='' style={kitchen.group === 4 ? {filter: 'hue-rotate(220deg)'} : null} />
        </button>
      </div>
      <Sidebar
        bar="Equipment"
        name="Kitchen"
        btn="Summary"
        pageLink="/summary"
        pageBack="/floorstyle"
        pageComp={<KitchenSidebar />}
      />
    </React.Fragment>
  )
}
