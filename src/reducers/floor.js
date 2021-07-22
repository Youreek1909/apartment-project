import data from '../api/floorApi'

const floor1 = data[0].floor[0]
const floor2 = data[0].floor[1]
const floor3 = data[0].floor[2]
const floor4 = data[0].floor[3]
const floor5 = data[0].floor[4]
const floor6 = data[0].floor[5]
const floor7 = data[0].floor[6]
const floor8 = data[0].floor[7]
const floor9 = data[0].floor[8]
const floor10 = data[0].floor[9]
const floor11 = data[0].floor[10]
const floor12 = data[0].floor[11]
const floor13 = data[0].floor[12]


const floorReducer = (state = floor1, action) => {
  switch (action.type) {
    case 'FLOOR_1':
      return state = floor1;
    case 'FLOOR_2':
      return state = floor2;
    case 'FLOOR_3':
      return state = floor3;
    case 'FLOOR_4':
      return state = floor4;
    case 'FLOOR_5':
      return state = floor5;
    case 'FLOOR_6':
      return state = floor6;
    case 'FLOOR_7':
      return state = floor7;
    case 'FLOOR_8':
      return state = floor8;
    case 'FLOOR_9':
      return state = floor9;
    case 'FLOOR_10':
      return state = floor10;
    case 'FLOOR_11':
      return state = floor11;
    case 'FLOOR_12':
      return state = floor12;
    case 'FLOOR_13':
      return state = floor13;
    default:
      return state;
  }
}

export default floorReducer;