import data from '../api/kitchenApi'

const kitchenBackground = data[0].kitchen[0].background
const kitchenFront = data[0].kitchen[1].front
const kitchenBack = data[0].kitchen[2].back
const kitchenCover = data[0].kitchen[3].cover
const kitchenOven = data[0].kitchen[4].oven
const kitchenGroup = [{ id: 0, changed: false }, { id: 1, changed: false }, { id: 2, changed: false }, { id: 3, changed: false }]
const kitchenTap = data[0].kitchen[5].appliances[0].tap
const kitchenBar = data[0].kitchen[5].appliances[1].bar
const kitchenIndividual = [{ id: 0, individual: false }, { id: 1, individual: false }, { id: 2, individual: false }, { id: 3, individual: false }]


const kitchenDefault = {
  background: kitchenBackground[0],
  front: kitchenFront[0],
  back: kitchenBack[0],
  cover: kitchenCover[0],
  oven: kitchenOven[0],
  group: null,
  changedGroup: kitchenGroup,
  moreOptions: false,
  tap: kitchenTap[0],
  bar: kitchenBar[0],
  individual: kitchenIndividual
}

const kitchenReducer = (state = kitchenDefault, action) => {
  switch (action.type) {
    case 'KITCHEN_FRONT':
      return state = { ...state, front: kitchenFront[action.payload] };
    case 'KITCHEN_BACK':
      return state = { ...state, back: kitchenBack[action.payload] };
    case 'KITCHEN_COVER':
      return state = { ...state, cover: kitchenCover[action.payload] };
    case 'KITCHEN_OVEN':
      return state = { ...state, oven: kitchenOven[action.payload] };
    case 'KITCHEN_BACKGROUND':
      return state = { ...state, background: kitchenBackground[action.payload] };
    case 'KITCHEN_GROUP':
      return state = { ...state, group: action.payload };
    case 'KITCHEN_GROUP_CHANGED':
      return state = { ...state, changedGroup: state.changedGroup.map(item => item.id === action.payload ? { ...item, changed: true } : item) };
    case 'KITCHEN_TAP':
      return state = { ...state, tap: kitchenTap[action.payload] };
    case 'KITCHEN_BAR':
      return state = { ...state, bar: kitchenBar[action.payload] };
    case 'TOGGLE_OPTIONS':
      return state = { ...state, moreOptions: action.payload};
    case 'KITCHEN_INDIVIDUAL':
      return state = { ...state, individual: state.individual.map(item => item.id === action.payload ? { ...item, individual: !state.individual[action.payload].individual } : item) };
    default:
      return state;
  }
}

export default kitchenReducer;