import data from '../api/kitchenApi'

const kitchenFront = data[0].kitchen[1].front
const kitchenBack = data[0].kitchen[2].back
const kitchenCover = data[0].kitchen[3].cover
const kitchenOven = data[0].kitchen[4].oven
const kitchenGroup = [{ id: 0, changed: false }, { id: 1, changed: false }, { id: 2, changed: false }, { id: 3, changed: false }]
const kitchenTap = data[0].kitchen[5].appliances[0].tap
const kitchenBar = data[0].kitchen[5].appliances[1].bar
const kitchenIndividual = [{ id: 0, individual: false }, { id: 1, individual: false }, { id: 2, individual: false }, { id: 3, individual: false }]
const bgApi = data[0].kitchen[0].background

const kitchenBackground = (nr) => {
  return {
    '0_0_0' : bgApi[0],
    '1_0_0' : bgApi[1],
    '2_0_0' : bgApi[2],
    '0_1_0' : bgApi[3],
    '1_1_0' : bgApi[4],
    '2_1_0' : bgApi[5],
    '0_0_1' : bgApi[6],
    '0_0_2' : bgApi[7],
    '1_0_1' : bgApi[8],
    '1_0_2' : bgApi[9],
    '2_0_1' : bgApi[10],
    '2_0_2' : bgApi[11],
    '0_1_1' : bgApi[12],
    '0_1_2' : bgApi[13],
    '1_1_1' : bgApi[14],
    '1_1_2' : bgApi[15],
    '2_1_1' : bgApi[16],
    '2_1_2' : bgApi[17]
  }[nr]
}

const kitchenDefault = {
  background: bgApi[0],
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
      return state = { ...state, background: kitchenBackground(`${state.front.id}_${state.back.id}_${state.cover.id}`) };
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