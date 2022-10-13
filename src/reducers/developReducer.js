
export const actiontype = {
  ADD_DEVELOPER: 'ADD_DEVELOPER',
  REMOVE_DEVELOPER: 'REMOVE_DEVELOPER'
}
export const developerRed = (state, action) => {
  console.log(action)
  switch (action.type) {
    case actiontype.ADD_DEVELOPER:
      return [...state, {
        name: action.payload.name,
        food: action.payload.food,
        drink: action.payload.drink,
        language: action.payload.language,
        technologies: action.payload.technologies,
        id: state.length + 1,


      }]
    case actiontype.REMOVE_DEVELOPER:
      return state.filter(info => info.id !== action.payload.id)
    default:
      return state;
  }

}

