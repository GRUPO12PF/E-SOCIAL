import Category from "../models/Category.js"

const getCategory = async (req, res) => {
    const category = new Category(req.body)
    category.creador = req.usuario._id

    try {
        const categoryAlmacenado = await category.save()
        res.json(categoryAlmacenado);
    } catch (error) {
        console.log(error)
    }
}; 

const postCategory = async (req, res) => {
    
}

export {
    getCategory
}