

export const activateLoader = () => {
  return {
    type: 'LOADER_ON',
  }
}

export const dismissLoader = () => {
  return {
    type: 'LOADER_OFF',
  }
}
