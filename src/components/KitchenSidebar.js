import React from 'react'
import data from '../api/kitchenApi'
import { FaAngleLeft, FaAngleRight, FaPen } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import {
  changeKitchenFront,
  changeKitchenBack,
  changeKitchenCover,
  changeKitchenOven,
  changeKitchenBackground,
  changeKitchenGroup,
  changeKitchenGroupChanged,
  changeKitchenTap,
  changeKitchenBar,
  toggleOptions,
  changeKitchenIndividual
} from '../actions'

const kitchenFront = data[0].kitchen[1].front
const kitchenBack = data[0].kitchen[2].back
const kitchenCover = data[0].kitchen[3].cover
const kitchenOven = data[0].kitchen[4].oven
const kitchenTap = data[0].kitchen[5].appliances[0].tap
const kitchenBar = data[0].kitchen[5].appliances[1].bar



export default function KitchenSidebar() {
  const dispatch = useDispatch();
  const kitchen = useSelector(state => state.kitchen);



  return (
    <React.Fragment>

      <button className="card--btn"
        onClick={() => {
          dispatch(changeKitchenGroup(1));
          dispatch(changeKitchenGroupChanged(0));
        }}>
        <Card
          name="Front"
          nr={kitchenFront.length}
          preview={kitchen.front.preview}
          title={kitchen.front.title}
          description={kitchen.front.description}
          myStyle={`${kitchen.changedGroup[0].changed ? "check--active check--active__black" : ''}`}
        />
      </button>

      {kitchen.group === 1 && <FrontList />}

      <button className="card--btn"
        onClick={() => {
          dispatch(changeKitchenGroup(2));
          dispatch(changeKitchenGroupChanged(1));
        }}>
        <Card
          name="Back"
          nr={kitchenBack.length}
          preview={kitchen.back.preview}
          title={kitchen.back.title}
          description={kitchen.back.description}
          myStyle={`${kitchen.changedGroup[1].changed ? "check--active check--active__black" : ''}`}
        />
      </button>

      {kitchen.group === 2 && <BackList />}

      <button className="card--btn"
        onClick={() => {
          dispatch(changeKitchenGroup(3));
          dispatch(changeKitchenGroupChanged(2));
        }}>
        <Card
          name="Cover"
          nr={kitchenCover.length}
          preview={kitchen.cover.preview}
          title={kitchen.cover.title}
          description={kitchen.cover.description}
          myStyle={`${kitchen.changedGroup[2].changed ? "check--active check--active__black" : ''}`}
        />
      </button>

      {kitchen.group === 3 && <CoverList />}

      <button className="card--btn"
        onClick={() => {
          dispatch(changeKitchenGroup(4));
          dispatch(changeKitchenGroupChanged(3));
        }}>
        <Card
          name="Oven"
          nr={kitchenOven.length}
          preview={kitchen.oven.preview}
          title={kitchen.oven.title}
          description={kitchen.oven.description}
          myStyle={`${kitchen.changedGroup[3].changed ? "check--active check--active__black" : ''}`}
        />
      </button>
      {kitchen.group === 4 && <OvenList />}

      <MoreOptions />




      {kitchen.group &&
        <div className="btn--box">
          <button className="btn--kitchen btn--kitchen__back"
            onClick={() => dispatch(changeKitchenGroup(null))}
          >
            <FaAngleLeft className="btn--icon btn--icon__left" />
            <span>Kitchen</span>
          </button>

          <button className="btn--kitchen btn--kitchen__next"
            onClick={() => {
              dispatch(changeKitchenGroup(
                kitchen.group < 4 ? kitchen.group + 1 : null
              ));
              dispatch(changeKitchenGroupChanged(
                (kitchen.group - 1) < 4 ? (kitchen.group - 1) + 1 : null
              ));
            }}
          >
            <span>Next</span>
            <FaAngleRight className="btn--icon btn--icon__right" />
          </button>
        </div>
      }


    </React.Fragment >
  )
}

function Card({ name, nr, preview, title, description, myStyle }) {
  const kitchen = useSelector(state => state.kitchen);

  return (
    <React.Fragment>
      {!kitchen.group &&
        <div className="card">
          <div className="card--heading" >
            {name}
            < div className="card--heading__nr" >
              <span>{nr}</span>
            </div>
          </div>
          <div className={`card--wrapper ${myStyle}`}>
            <img src={preview} alt='' />
            <div className="card--wrapper__text">
              <p className="title">{title}</p>
              <p className="description">{description}</p>
            </div>
          </div>
        </div >
      }
    </React.Fragment >
  )
}

function FrontList() {
  const kitchen = useSelector(state => state.kitchen);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {!kitchen.individual[0].individual &&
        <div className="card">
          <div className="card--heading">
            front
          </div>
          <button className="card--btn"
            onClick={() => {
              dispatch(changeKitchenFront(0));
              dispatch(changeKitchenBackground());
            }}>
            <div className={`card--wrapper ${kitchen.front.id === 0 ? "check--active" : ''}`}
              style={kitchen.front.id === 0 ? { backgroundColor: '#7AD1D1' } : null}>
              <img src={kitchenFront[0].preview} alt='' />
              <div className="card--wrapper__text">
                <p className="title">{kitchenFront[0].title}</p>
                <p className="description">{kitchenFront[0].description}</p>
              </div>
            </div>
          </button>
          <button className="card--btn"
            onClick={() => {
              dispatch(changeKitchenFront(1));
              dispatch(changeKitchenBackground());
            }}>
            <div className={`card--wrapper ${kitchen.front.id === 1 ? "check--active" : ''}`}
              style={kitchen.front.id === 1 ? { backgroundColor: '#7AD1D1' } : null}>
              <img src={kitchenFront[1].preview} alt='' />
              <div className="card--wrapper__text">
                <p className="title">{kitchenFront[1].title}</p>
                <p className="description">{kitchenFront[1].description}</p>
              </div>
            </div>
          </button>
          <button className="card--btn"
            onClick={() => {
              dispatch(changeKitchenFront(2));
              dispatch(changeKitchenBackground());
            }}>
            <div className={`card--wrapper ${kitchen.front.id === 2 ? "check--active" : ''}`}
              style={kitchen.front.id === 2 ? { backgroundColor: '#7AD1D1' } : null}>
              <img src={kitchenFront[2].preview} alt='' />
              <div className="card--wrapper__text">
                <p className="title">{kitchenFront[2].title}</p>
                <p className="description">{kitchenFront[2].description}</p>
              </div>
            </div>
          </button>
        </div>
      }
      <div className="individual--wrapper row">
        <div className="individual--heading">
          <p>I want one Individual solution</p>
        </div>
        <div className="individual--checkbox">
          <input type="checkbox" className="switch" defaultChecked={kitchen.individual[0].individual ? 'checked' : null} onClick={() => {
            dispatch(changeKitchenIndividual(0));
          }} />
        </div>
      </div>
    </React.Fragment>
  )
}

function BackList() {
  const kitchen = useSelector(state => state.kitchen);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {!kitchen.individual[1].individual && 
      <div className="card">
        <div className="card--heading">
          back
        </div>
        <button className="card--btn"
          onClick={() => {
            dispatch(changeKitchenBack(0));
            dispatch(changeKitchenBackground());
          }}>
          <div className={`card--wrapper ${kitchen.back.id === 0 ? "check--active" : ''}`}
            style={kitchen.back.id === 0 ? { backgroundColor: '#7AD1D1' } : null}>
            <img src={kitchenBack[0].preview} alt='' />
            <div className="card--wrapper__text">
              <p className="title">{kitchenBack[0].title}</p>
              <p className="description">{kitchenBack[0].description}</p>
            </div>
          </div>
        </button>
        <button className="card--btn"
          onClick={() => {
            dispatch(changeKitchenBack(1));
            dispatch(changeKitchenBackground());
          }
          }>
          <div className={`card--wrapper ${kitchen.back.id === 1 ? "check--active" : ''}`}
            style={kitchen.back.id === 1 ? { backgroundColor: '#7AD1D1' } : null}>
            <img src={kitchenBack[1].preview} alt='' />
            <div className="card--wrapper__text">
              <p className="title">{kitchenBack[1].title}</p>
              <p className="description">{kitchenBack[1].description}</p>
            </div>
          </div>
        </button>
      </div>
      }
      <div className="individual--wrapper row">
        <div className="individual--heading">
          <p>I want one Individual solution</p>
        </div>
        <div className="individual--checkbox">
          <input type="checkbox" className="switch" defaultChecked={kitchen.individual[1].individual ? 'checked' : null} onClick={() => {
            dispatch(changeKitchenIndividual(1));
          }} />
        </div>
      </div>
    </React.Fragment>
  )
}

function CoverList() {
  const kitchen = useSelector(state => state.kitchen);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      { !kitchen.individual[2].individual &&
      <div className="card">
        <div className="card--heading">
          Cover
        </div>
        <button className="card--btn"
          onClick={() => {
            dispatch(changeKitchenCover(0));
            dispatch(changeKitchenBackground());
          }}>
          <div className={`card--wrapper ${kitchen.cover.id === 0 ? "check--active" : ''}`}
            style={kitchen.cover.id === 0 ? { backgroundColor: '#7AD1D1' } : null}>
            <img src={kitchenCover[0].preview} alt='' />
            <div className="card--wrapper__text">
              <p className="title">{kitchenCover[0].title}</p>
              <p className="description">{kitchenCover[0].description}</p>
            </div>
          </div>
        </button>
        <button className="card--btn"
          onClick={() => {
            dispatch(changeKitchenCover(1));
            dispatch(changeKitchenBackground());
          }}>
          <div className={`card--wrapper ${kitchen.cover.id === 1 ? "check--active" : ''}`}
            style={kitchen.cover.id === 1 ? { backgroundColor: '#7AD1D1' } : null}>
            <img src={kitchenCover[1].preview} alt='' />
            <div className="card--wrapper__text">
              <p className="title">{kitchenCover[1].title}</p>
              <p className="description">{kitchenCover[1].description}</p>
            </div>
          </div>
        </button>
        <button className="card--btn"
          onClick={() => {
            dispatch(changeKitchenCover(2));
            dispatch(changeKitchenBackground());
          }}>
          <div className={`card--wrapper ${kitchen.cover.id === 2 ? "check--active" : ''}`}
            style={kitchen.cover.id === 2 ? { backgroundColor: '#7AD1D1' } : null}>
            <img src={kitchenCover[2].preview} alt='' />
            <div className="card--wrapper__text">
              <p className="title">{kitchenCover[2].title}</p>
              <p className="description">{kitchenCover[2].description}</p>
            </div>
          </div>
        </button>
      </div>
      }
      <div className="individual--wrapper row">
        <div className="individual--heading">
          <p>I want one Individual solution</p>
        </div>
        <div className="individual--checkbox">
          <input type="checkbox" className="switch" defaultChecked={kitchen.individual[2].individual ? 'checked' : null} onClick={() => {
            dispatch(changeKitchenIndividual(2));
          }} />
        </div>
      </div>
    </React.Fragment>
  )
}

function OvenList() {
  const kitchen = useSelector(state => state.kitchen);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      { !kitchen.individual[3].individual &&
      <div className="card">
        <div className="card--heading">
          Oven
        </div>
        <button className="card--btn"
          onClick={() => {
            dispatch(changeKitchenOven(0));
          }}>
          <div className={`card--wrapper ${kitchen.oven.id === 0 ? "check--active" : ''}`}
            style={kitchen.oven.id === 0 ? { backgroundColor: '#7AD1D1' } : null}>
            <img src={kitchenOven[0].preview} alt='' />
            <div className="card--wrapper__text">
              <p className="title">{kitchenOven[0].title}</p>
              <p className="description">{kitchenOven[0].description}</p>
            </div>
          </div>
        </button>
        <button className="card--btn"
          onClick={() => dispatch(changeKitchenOven(1))}>
          <div className={`card--wrapper ${kitchen.oven.id === 1 ? "check--active" : ''}`}
            style={kitchen.oven.id === 1 ? { backgroundColor: '#7AD1D1' } : null}>
            <img src={kitchenOven[1].preview} alt='' />
            <div className="card--wrapper__text">
              <p className="title">{kitchenOven[1].title}</p>
              <p className="description">{kitchenOven[1].description}</p>
            </div>
          </div>
        </button>
      </div>
      }
      <div className="individual--wrapper row">
        <div className="individual--heading">
          <p>I want one Individual solution</p>
        </div>
        <div className="individual--checkbox">
          <input type="checkbox" className="switch" defaultChecked={kitchen.individual[3].individual ? 'checked' : null} onClick={() => {
            dispatch(changeKitchenIndividual(3));
          }} />
        </div>
      </div>
    </React.Fragment>
  )
}

function MoreOptions() {
  const kitchen = useSelector(state => state.kitchen)
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {!kitchen.group || kitchen.group === 5 ?
        <div className="options">
          <div className="options--header">
            <h1 className="options--heading">Additional Options</h1>
            <button onClick={() => {
              dispatch(toggleOptions(true));
              if (!kitchen.group) {
                dispatch(changeKitchenGroup(5));
              } else {
                dispatch(changeKitchenGroup(null));
              }
            }}>
              <FaPen className="options--icon" />
            </button>
          </div>
          <div className="options--wrapper">
            <div className="tap">
              <p>Tap</p>
              {kitchen.group < 5 && <p>{kitchen.tap.description}</p>}
            </div>
            {kitchen.moreOptions && kitchen.group === 5 && <TapList />}
            <div className="bar">
              <p>Bar</p>
              {kitchen.group < 5 && <p>{kitchen.bar.description}</p>}
            </div>
            {kitchen.moreOptions && kitchen.group === 5 && <BarList />}
          </div>
        </div>
        : null}
    </React.Fragment>
  )
}

function TapList() {
  const kitchen = useSelector(state => state.kitchen);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className="card">
        <button className="card--btn"
          onClick={() => {
            dispatch(changeKitchenTap(0));
          }}>
          <div className={`card--wrapper ${kitchen.tap.id === 0 ? "check--active" : ''}`}
            style={kitchen.tap.id === 0 ? { backgroundColor: '#7AD1D1' } : null}>
            <img src={kitchenTap[0].preview} alt='' />
            <div className="card--wrapper__text">
              <p className="title">{kitchenTap[0].title}</p>
              <p className="description">{kitchenTap[0].description}</p>
            </div>
          </div>
        </button>
        <button className="card--btn"
          onClick={() => dispatch(changeKitchenTap(1))}>
          <div className={`card--wrapper ${kitchen.tap.id === 1 ? "check--active" : ''}`}
            style={kitchen.tap.id === 1 ? { backgroundColor: '#7AD1D1' } : null}>
            <img src={kitchenTap[1].preview} alt='' />
            <div className="card--wrapper__text">
              <p className="title">{kitchenTap[1].title}</p>
              <p className="description">{kitchenTap[1].description}</p>
            </div>
          </div>
        </button>
      </div>
    </React.Fragment>
  )
}


function BarList() {
  const kitchen = useSelector(state => state.kitchen);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className="card">
        <button className="card--btn"
          onClick={() => {
            dispatch(changeKitchenBar(0));
          }}>
          <div className={`card--wrapper ${kitchen.bar.id === 0 ? "check--active" : ''}`}
            style={kitchen.bar.id === 0 ? { backgroundColor: '#7AD1D1' } : null}>
            <img src={kitchenBar[0].preview} alt='' />
            <div className="card--wrapper__text">
              <p className="title">{kitchenBar[0].title}</p>
              <p className="description">{kitchenBar[0].description}</p>
            </div>
          </div>
        </button>
        <button className="card--btn"
          onClick={() => dispatch(changeKitchenBar(1))}>
          <div className={`card--wrapper ${kitchen.bar.id === 1 ? "check--active" : ''}`}
            style={kitchen.bar.id === 1 ? { backgroundColor: '#7AD1D1' } : null}>
            <img src={kitchenBar[1].preview} alt='' />
            <div className="card--wrapper__text">
              <p className="title">{kitchenBar[1].title}</p>
              <p className="description">{kitchenBar[1].description}</p>
            </div>
          </div>
        </button>
      </div>
    </React.Fragment>
  )
}
