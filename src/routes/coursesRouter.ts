import { Router } from "express"
import { coursesRepository } from "../repositories/courses-repositories"


export const coureseRouter = Router()


coureseRouter.get('/', (req, res) => {
    const foundProducts = coursesRepository.findProduct(req.query.name?.toString())
    res.json(foundProducts)
  })
coureseRouter.get('/:id', (req, res) => {
    const foundIdProduct = coursesRepository.findIdProducts(+req.params.id)
    res.send(foundIdProduct)
  })
coureseRouter.post('/', (req, res) => {
    const createdProduct = coursesRepository.createProduct(req.body.name.toString())
    res.sendStatus(createdProduct)
  })
coureseRouter.delete('/:id', (req, res) => {
    const deletedProduct = coursesRepository.deleteProducts(+req.params.id) 
  
    res.sendStatus(deletedProduct)
  })
coureseRouter.put('/:id', (req, res) => {
    const updatedroduct = coursesRepository.updateProduct(+req.params.id,
                                                          req.body.name)
    res.sendStatus(updatedroduct)
  })