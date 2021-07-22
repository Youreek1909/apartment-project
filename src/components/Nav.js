import React from 'react'
import { Link } from "react-router-dom";
import data from '../api/roomApi';
import { FaBars, FaEnvelopeOpenText } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'
import { toggleMenu } from '../actions'
import Fade from 'react-reveal/Fade';

export default function Nav({ page }) {
  const menu = useSelector(state => state.menu);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className={`nav ${page} ${menu ? 'nav--openMenu' : null}`}>
        <div className="logo">
          <Link to='/'>
            <img
              className='logo--img'
              src={data[0].logo.content}
              alt={data[0].logo.name} />
          </Link>
        </div>
        <div className="pages">
          <Fade top when={menu}>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/interiorStyle'>Interior</Link>
              </li>
              <li>
                <Link to='/floorStyle'>Floor</Link>
              </li>
              <li>
                <Link to='/kitchen'>Kitchen</Link>
              </li>
            </ul>
          </Fade>
        </div>
        <div className="menu">
          <FaBars
            onClick={() => dispatch(toggleMenu())}
            className='menu--icon' />
          <Link to='/summary'>
            <FaEnvelopeOpenText className='menu--icon' />
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}
