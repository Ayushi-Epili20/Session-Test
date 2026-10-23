const productModel = require("../model/productModel");

const addproduct = async (req, resp) => {
    try {
        const { title, img, desc } = req.body
        await productModel.create({ title, img, desc })
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
    }
}

const deleteproduct = async (req, resp) => {
    try {
        await productModel.findByIdAndDelete(req.params.id)
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);

    }
}

const editForm = async (req, resp) => {
    const data = await productModel.findById(req.params.id)
    resp.render("edit", { data })
}

const editproduct = async (req, resp)=> {
    try {
        const { title, img, desc } = req.body
        await productModel.findByIdAndUpdate(req.params.id, req.body)
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);

    }
}

module.exports = { addproduct, deleteproduct, editForm, editproduct }
