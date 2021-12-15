import { Router } from 'express'

import { CarbonEmissionCalculatorController } from './controllers/CarbonEmissionController'

export const carbonEmissionRouter = Router()

const carbonEmissionCalculatorController =
  new CarbonEmissionCalculatorController()

carbonEmissionRouter.post('/', carbonEmissionCalculatorController.calculate)
