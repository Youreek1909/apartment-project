import data from '../api/roomApi'

const room1 = data[1].room[0]
const room2 = data[1].room[1]

const roomReducer = (state = room1, action) => {
  switch(action.type) {
    case 'ROOM_1':
      return state = room1;
    case 'ROOM_2':
      return state = room2;
    default: 
      return state;
  }
}

export default roomReducer;