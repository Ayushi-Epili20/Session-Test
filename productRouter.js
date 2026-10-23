const express = require('express');
const { addproduct, deleteproduct, editForm, editproduct } = require('../controller/productController');

const p_router = express.Router()

p_router.get("/add",(req,resp)=>{
    resp.render("add")
})

p_router.post("/add",addproduct)

p_router.get("/edit/:id",editForm)

p_router.patch("/edit/:id",editproduct)

p_router.delete("/delete/:id", deleteproduct)

module.exports = p_router