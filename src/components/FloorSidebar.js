import React from 'react'
import data from '../api/floorApi' 
import { useSelector, useDispatch } from 'react-redux'
import { changeFloor } from '../actions'

const stylesParquet = data[0].floor.slice(0, 3)
const stylesTiles = data[0].floor.slice(9)

export default function FloorSidebar() {
  const floor = useSelector(state => state.floor);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className="floor">
        <h2>BODEN</h2>
        <div className="floor--options">
          <button
            style={floor.name === 'parquet' ? { backgroundColor: '#B4166E', color: 'white' } : null}
            onClick={() => dispatch(changeFloor(1))}>Parquet</button>
          <button
            style={floor.name === 'tiles' ? { backgroundColor: '#B4166E', color: 'white' } : null}
            onClick={() => dispatch(changeFloor(10))}>Tile</button>
        </div>
        <hr />
        <div className="preview">
          {floor.name === 'parquet' ? <Parquet /> : <Tiles />}
        </div>
      </div>
    </React.Fragment>
  )
}

function Parquet() {
  const floor = useSelector(state => state.floor);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <ul>
        {stylesParquet.map(el => (
          <li key={el.id}>
            <button
              style={floor.color === el.color ? { backgroundColor: '#7AD1D1'} : null}
              onClick={() => dispatch(changeFloor(el.id))}>
              <div className={`preview--wrapper ${floor.color === el.color ? "check--active" : ''}`}>
                <img src={el.preview} alt={el.color} />
                <div className="preview--wrapper__text">
                  <p className="material">{el.material}</p>
                  <p className="name">{el.color}</p>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
      <div className="format">
        <h2>FORMAT</h2>
        <div className="format--wrapper">
          <div className="radio">
            <button
              style={floor.id === 1 || floor.id === 2 || floor.id === 3 ? { backgroundColor: '#B4166E' } : null}
              onClick={
                () => {
                  if (floor.color === 'white') {
                    dispatch(changeFloor(1))
                  } else if (floor.color === 'natur') {
                    dispatch(changeFloor(2))
                  } else if (floor.color === 'brown') {
                    dispatch(changeFloor(3))
                  }
                }
              }
            />
          </div>
          <div className="size">
            <p>47 x 7cm</p>
          </div>
          <div className="price">
            <p>included</p>
          </div>
        </div>
        <div className="format--wrapper">
          <div className="radio">
            <button
              style={floor.id === 4 || floor.id === 5 || floor.id === 6 ? { backgroundColor: '#B4166E' } : null}
              onClick={
                () => {
                  if (floor.color === 'white') {
                    dispatch(changeFloor(4))
                  } else if (floor.color === 'natur') {
                    dispatch(changeFloor(5))
                  } else if (floor.color === 'brown') {
                    dispatch(changeFloor(6))
                  }
                }
              }
            />
          </div>
          <div className="size">
            <p>125 x 10cm</p>
            <span>brushed</span>
          </div>
          <div className="price">
            <p>+CHF 3,500</p>
          </div>
        </div>
        <div className="format--wrapper">
          <div className="radio">
            <button
              style={floor.id === 7 || floor.id === 8 || floor.id === 9 ? { backgroundColor: '#B4166E' } : null}
              onClick={
                () => {
                  if (floor.color === 'white') {
                    dispatch(changeFloor(7))
                  } else if (floor.color === 'natur') {
                    dispatch(changeFloor(8))
                  } else if (floor.color === 'brown') {
                    dispatch(changeFloor(9))
                  }
                }
              }
            />
          </div>
          <div className="size">
            <p>210 x 14cm</p>
            <span>deep brushed</span>
          </div>
          <div className="price">
            <p>+CHF 4,500</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

function Tiles() {
  const floor = useSelector(state => state.floor);
  const dispatch = useDispatch();

  return (
    <ul>
      {stylesTiles.map(el => (
        <li key={el.id}>
          <button
            style={floor.color === el.color ? { backgroundColor: '#7AD1D1' } : null}
            onClick={() => dispatch(changeFloor(el.id))}>
            <div className="preview--wrapper">
              <img src={el.preview} alt={el.color} />
              <div className="preview--wrapper__text">
                <p className="material">{el.material}</p>
                <p className="name">{el.color}</p>
              </div>
            </div>
          </button>
        </li>
      ))}
    </ul>
  )
}