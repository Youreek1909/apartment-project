export const changeRoom = (nr) => {
  return {
    type: `ROOM_${nr}`
  }
}

export const changeStyle = (nr) => {
  return {
    type: `STYLE_${nr}`
  }
}

export const toggleSidebar = () => {
  return {
    type: 'TOGGLE'
  }
}

export const changeFloor = (nr) => {
  return {
    type: `FLOOR_${nr}`
  }
}

export const toggleMenu = () => {
  return {
    type: 'TOGGLE_MENU'
  }
}

export const changeKitchenFront = (nr) => {
  return {
    type: `KITCHEN_FRONT`,
    payload: nr
  }
}

export const changeKitchenBack = (nr) => {
  return {
    type: `KITCHEN_BACK`,
    payload: nr
  }
}

export const changeKitchenCover = (nr) => {
  return {
    type: `KITCHEN_COVER`,
    payload: nr
  }
}

export const changeKitchenOven = (nr) => {
  return {
    type: `KITCHEN_OVEN`,
    payload: nr
  }
}

export const changeKitchenBackground = (nr) => {
  return {
    type: `KITCHEN_BACKGROUND`,
    payload: nr
  }
}

export const changeKitchenGroup = (nr) => {
  return {
    type: `KITCHEN_GROUP`,
    payload: nr
  }
}

export const changeKitchenGroupChanged = (nr) => {
  return {
    type: 'KITCHEN_GROUP_CHANGED',
    payload: nr
  }
}

export const changeKitchenTap = (nr) => {
  return {
    type: `KITCHEN_TAP`,
    payload: nr
  }
}

export const changeKitchenBar = (nr) => {
  return {
    type: `KITCHEN_BAR`,
    payload: nr
  }
}

export const toggleOptions = (op) => {
  return {
    type: 'TOGGLE_OPTIONS',
    payload: op
  }
}

export const changeKitchenIndividual = (nr) => {
  return {
    type: 'KITCHEN_INDIVIDUAL',
    payload: nr
  }
}


export const toggleTest = () => {
  return {
    type: 'TOGGLE_TEST'
  }
}