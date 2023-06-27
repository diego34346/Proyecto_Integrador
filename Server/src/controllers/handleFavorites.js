
let myFavorites = []

const postFav = (req, res) => {
    myFavorites.push(req.body)
    res.status(200).json(myFavorites)
    // console.log(myFavorites)
}

const deleteFav = (req, res) => {    
    const { id } = req.params
    const deleteChar = myFavorites.filter((char) => {return char.id !== (id)})
    // console.log(deleteChar)
    myFavorites = deleteChar
    res.json(myFavorites)
}

module.exports = { postFav, deleteFav }

