export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  //can add another getter as an input too
  getAllCats: (state) => {
    return state.pets.filter((pets) => {
      return pets.species === 'cat'
    })
  }
}
