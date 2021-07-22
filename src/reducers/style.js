import data from '../api/styleApi'

const myStyle1 = data[0].style[0]
const myStyle2 = data[0].style[1]
const myStyle3 = data[0].style[2]

const styleReducer = (state = myStyle1, action) => {
  switch (action.type) {
    case 'STYLE_1':
      return state = myStyle1;
    case 'STYLE_2':
      return state = myStyle2;
    case 'STYLE_3':
      return state = myStyle3;
    default:
      return state;
  }
}

export default styleReducer;

