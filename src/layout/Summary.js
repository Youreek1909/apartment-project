import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../components/Nav'
import { FaPen } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaEnvelopeOpenText, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube  } from "react-icons/fa"
import Button from '../components/Button'
import logo from '../images/logo.png'



export default function Summary() {
  const style = useSelector(state => state.style);

  return (
    <div className="summary">
      <Nav page="nav--home" />
      <div className="summary--interior">
        <img src={style.content} alt="" />
      </div>
      <Rooms />
      <Floor />
      <Kitchen />
      <Configurator />
      <Footer />
    </div >
  )
}


function Rooms() {
  const style = useSelector(state => state.style);
  const rooms = useSelector(state => state.rooms);

  return (
    <div className="summary--rooms">
      <div className="room-description">
        <div className="description--heading">
          <h1>Your apartment</h1>
        </div>
        <div className="description--list">
          <ul>
            <li>
              <p>Flat</p>
              <p>Nr. 1.11.3</p>
            </li>
            <li>
              <p>Rooms</p>
              <p>{rooms.rooms}</p>
            </li>
            <li>
              <p>Interior</p>
              <p>{style.name}</p>
            </li>
            <li>
              <p>Floor space</p>
              <p>151m2</p>
            </li>
            <li>
              <p>Individual solutions</p>
              <p>0</p>
            </li>
            <li>
              <p>Additional price options</p>
              <p>0</p>
            </li>
            <li>
              <p>Purchase price</p>
              <p>CHF 1’200’000</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="room-preview">
        <img src={rooms.content} alt="" />
      </div>
    </div>
  )
}

function Floor() {
  const floor = useSelector(state => state.floor);

  return (
    <div className="summary--floor">
      <h1 className="floor--heading">Living Room</h1>
      <img src={floor.content} alt="" />
      <div className="floor--options">
        <Card
          heading="Front"
          preview={floor.preview}
          title={floor.material}
          description={floor.color}
          link="/floorStyle"
        />
        <div className="format">
          <h1 className="format--heading">Format</h1>
          <div className="format--wrapper">
            <div className="options">
              <div className="radio">
                <button
                  style={{ backgroundColor: '#B4166E' }} />
              </div>
              <div className="size">
                <p>{floor.size}</p>
              </div>
            </div>
            <div className="price">
              <p>{floor.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Kitchen() {
  const kitchen = useSelector(state => state.kitchen);

  return (
    <div className="summary--kitchen">
      <h1 className="kitchen--heading">Kitchen</h1>
      <div className="kitchen--preview">
        <img src={kitchen.background.preview} alt="" />
      </div>
      <div className="kitchen--style">
        <div className="row sp-btw mb-5rem">
          <div className="front">
            <Card
              heading="Front"
              preview={kitchen.front.preview}
              title={kitchen.front.title}
              description={kitchen.front.description}
              link="/kitchen"
            />
          </div>
          <div className="back">
            <Card
              heading="Back"
              preview={kitchen.back.preview}
              title={kitchen.back.title}
              description={kitchen.back.description}
              link="/kitchen"
            />
          </div>
        </div>
        <div className="row sp-btw mb-5rem">
          <div className="cover">
            <Card
              heading="Cover"
              preview={kitchen.cover.preview}
              title={kitchen.cover.title}
              description={kitchen.cover.description}
              link="/kitchen"
            />
          </div>
          <div className="oven">
            <Card
              heading="Oven"
              preview={kitchen.oven.preview}
              title={kitchen.oven.title}
              description={kitchen.oven.description}
              link="/kitchen"
            />
          </div>
        </div>
        <div className="summary--options__wrapper">
          <div className="row sp-btw mb-3rem">
            <h1>ADDITIONAL OPTIONS</h1>
            <Link to="/kitchen" >
              <FaPen className="summary--card__icon" />
            </Link>
          </div>
          <div className="row sp-btw">
            <div className="tap row sp-btw">
              <p>Tap</p>
              <p>{kitchen.tap.description}</p>
            </div>
            <div className="bar row sp-btw">
              <p>Bar</p>
              <p>{kitchen.bar.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function Card({ heading, preview, title, description, link }) {

  return (
    <div className="summary--card">
      <h1 className="summary--card__heading">
        {heading}
      </h1>
      <div className="summary--card__preview">
        <img src={preview} alt="" />
        <div className="summary--card__wrapper">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
        </div>
        <Link to={link} >
          <FaPen className="summary--card__icon" />
        </Link>
      </div>
    </div>
  )
}


function Configurator() {
  return (
    <div className="summary--configurator">
      <div className="configurator--header row">
        <FaEnvelopeOpenText className="configurator--icon" />
        <h1>Complete the configurator</h1>
      </div>
      <div className="configurator--form">
        <div className="information">
          <p>You can easily send your configuration to your email address as a PDF.</p>
          <p>If you want to start a new configuration, please delete your browser data.</p>
        </div>
        <form>
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Last Name"></input>
          <input type="email" placeholder="Email"></input>
          <input type="tel" placeholder="Phone number"></input>
          <div className="toggle">
            <p>Please contact us</p>
            <div className="switch--box">
              <input type="checkbox" className="switch"></input>
            </div>
          </div>
          <div className="configurator--btn">
            <Button
              text="Complete and send"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

function Footer() {

  return (
    <div className="summary--footer">
      <div className="row sp-btw">
        <div className="address--wrapper  w-100">
          <p>Sony Group Corporation</p>
          <p>Sony City, Minato, Tokyo, Japan</p>
          <p>+89 293 483 267</p>
          <p>info@sony.com</p>
        </div>
        <div className="logo--wrapper  w-100">
          <img src={logo} alt="" />
        </div>
        <div className="social--wrapper  w-100">
          <div className="social">
            <FaFacebookF  className="social--icon" />
            <FaLinkedinIn  className="social--icon" />
            <FaTwitter  className="social--icon" />
            <FaYoutube  className="social--icon" />
          </div>
          <div className="information">
            <p>Game and Network Services</p>
            <p>  Music </p>
            <p>  Electronics Products and Solutions</p>
          </div>
        </div>
      </div>
    </div>
  )
}