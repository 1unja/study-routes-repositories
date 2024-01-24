import { Router } from "express"
import { adressesRepositories } from "../repositories/adresses-repositories"
export const adressesRouter = Router()

adressesRouter.get('/', (req, res) => {
    const foundAdresses = adressesRepositories.findAdress(req.query.value?.toString())
    res.json(foundAdresses)
  })
adressesRouter.post('/', (req, res) => {
    const sentAdresses = adressesRepositories.sendAdress(req.body.value)
    res.sendStatus(sentAdresses)
  })