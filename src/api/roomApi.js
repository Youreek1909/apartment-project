import logo from '../images/logo.png'
import room1 from '../images/homepage/Floorplan_small.png'
import room2 from '../images/homepage/Floorplan_large.png'

const roomData = [
  {
    logo: {
      id: 1,
      name: 'Logo',
      content: logo
    }
  },
  {
    room: [
      {
        id: 1,
        name: 'Floor 1',
        content: room1,
        rooms: '4.5 Rooms'
      },
      {
        id: 2,
        name: 'Floor 2',
        content: room2,
        rooms: '3.5 Rooms'
      }
    ]
  }
]

export default roomData;