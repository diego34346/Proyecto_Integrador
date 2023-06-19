

let myFavorites = []
// let filterCharacters = []

const postFav = (req, res) => {
    const { character } = req.body
    myFavorites.push(character)
    // const filterCharacters = myFavorites.push(character)
    res.status(200).json(myFavorites)
    // res.status(200).json(filterCharacters)
}

const deleteFav = (req, res) => {
    const { id } = req.params
    myFavorites = myFavorites.filter((char) => char.id !== Number(id))
    // const filterCharacters = myFavorites.filter((char) => char.id !== Number(id))
    res.status(200).json(myFavorites)
    // res.status(200).json(filterCharacters)
}

module.exports = postFav,deleteFav
