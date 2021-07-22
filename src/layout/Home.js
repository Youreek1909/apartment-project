import React from 'react'
import data from '../api/roomApi'
import Button from '../components/Button'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {changeRoom} from '../actions'
import Nav from '../components/Nav'


const room = [
  data[1].room[0].rooms,
  data[1].room[1].rooms
]


export default function Home() {
  const rooms = useSelector(state => state.rooms);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Nav page="nav--home" />
      <div className="home">
        <div className="intro">
          <h1 className="intro--heading">Choose your floorsize</h1>
          <p className="intro--text">Lorem dolore ex ipsum commodo adipisicing est deserunt reprehenderit nostrud commodo labore consectetur. Lorem fugiat est proident deserunt sint. Ad proident excepteur consequat nisi esse incididunt aliqua consequat pariatur. Qui anim laborum ullamco laboris magna sunt laborum adipisicing pariatur mollit cillum excepteur adipisicing. Sunt incididunt veniam eiusmod sint nisi dolore esse laborum ex nulla quis.</p>
        </div>
        <div className="floors">
          <div className="floors--left">
            <img src={data[1].room[0].content} alt={data[1].room[0].name} />
            <button
              style={rooms.id === 1 ? { borderBottom: '.2rem solid #B4166E' } : null}
              onClick={() => dispatch(changeRoom(1))}
            >{room[0]}</button>
          </div>
          <div className="floors--right">
            <img src={data[1].room[1].content} alt={data[1].room[1].name} />
            <button
              style={rooms.id === 2 ? { borderBottom: '.2rem solid #B4166E' } : null}
              onClick={() => dispatch(changeRoom(2))}
            >{room[1]}</button>
          </div>
        </div>
      </div>
      <Link to="/interiorStyle">
        <Button text="Confirm your choice" page="btn--home"/>
      </Link>
    </React.Fragment>
  )
}
