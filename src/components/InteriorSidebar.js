import React from 'react'
import data from '../api/styleApi'
import { useSelector, useDispatch } from 'react-redux'
import { changeStyle, changeFloor } from '../actions'

const livingData = data[0].style

export default function InteriorSidebar() {
  const style = useSelector(state => state.style);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <ul>
        {livingData.map(el => (
          <li key={el.id}>
            <h2>{el.name}</h2>
            <button
              style={style.content === el.content ? { outline: '.4rem solid #7AD1D1' } : null}
              onClick={() => {
                dispatch(changeStyle(el.id));
                dispatch(changeFloor(el.id));
              }}>
              <img src={el.preview} alt={el.name} />
            </button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}
