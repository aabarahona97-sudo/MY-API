const express = require('express');
const productServices = require('../services/servicesProducts');
const validatorHendler = require('../middleware/validator.handler');
const router = express.Router();
const {schemaProductCreate, updateSchemaProduct, getProductSchema} = require('../schema/schemaProducts')


router.get('/', async (req, res, next)=> {
  try {
  const products = await productServices.getAllproducts(req, res)
   res.json(products)
  } catch (error) {
    next(error)
  }
})

router.post('/', validatorHendler(schemaProductCreate, 'body'),
async (req, res)=> {
  const createProduct= await productServices.createnewProduct (req, res)
  return createProduct
})


router.patch('/:id',
 validatorHendler(getProductSchema, 'params'),
 validatorHendler(updateSchemaProduct, 'body'),
async (req, res)=>{
 const updateProducts = await productServices.updateProducts(req, res)
 return updateProducts
})


router.delete('/:id', async (req, res)=>{
 const updateProduct = await productServices.deleteProducts (req, res)
})

 router.get('/:id', validatorHendler(getProductSchema, 'params'),
 async (req, res)=> {
  const getOneProduct = await productServices.getOneProduct (req, res)
  return getOneProduct
})

module.exports = router;
