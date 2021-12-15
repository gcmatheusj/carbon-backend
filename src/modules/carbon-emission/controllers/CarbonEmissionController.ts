import { Request, Response } from 'express'
import { CarbonEmissionCalculatorService } from '../services/CarbonEmissionCalculatorService'

export class CarbonEmissionCalculatorController {
  calculate(request: Request, response: Response): Response {
    const { category, consumptionPerYear } = request.body

    if (!category || !consumptionPerYear) {
      return response.status(400).json({
        status: 'error',
        message:
          'You must provide category and consumptionPerYear to calculate carbon emission'
      })
    }

    const service = new CarbonEmissionCalculatorService()

    const result = service.execute({ category, consumptionPerYear })

    return response.json({
      category,
      result
    })
  }
}
