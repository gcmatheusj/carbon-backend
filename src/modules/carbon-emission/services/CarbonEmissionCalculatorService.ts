import AppError from '../../../errors/AppError'

type Category = 'electricity' | 'natural_gas'

interface CarbonEmissionCalculatorArgs {
  category: Category
  consumptionPerYear: number
}

interface CalculateCarbonEmissionArgs {
  consumptionPerYear: number
  emissionFactor: number
}

interface GetEmissionFactor {
  category: Category
}

export class CarbonEmissionCalculatorService {
  public execute({
    category,
    consumptionPerYear
  }: CarbonEmissionCalculatorArgs): number {
    const emissionFactor = this.getEmissionFactor({ category })

    const carbonEmission = this.calculateCarbonEmission({
      consumptionPerYear,
      emissionFactor
    })

    return carbonEmission
  }

  private getEmissionFactor({ category }: GetEmissionFactor): number {
    switch (category) {
      case 'electricity':
        /**
         * Emission Factor referenced in http://shrinkthatfootprint.com/calculate-your-carbon-footprint at Electricity section
         */
        return 0.7
      case 'natural_gas':
        /**
         * Emission Factor referenced in http://shrinkthatfootprint.com/calculate-your-carbon-footprint at Fuel section
         */
        return 6.6
      default:
        throw new AppError(
          'You should provide a valid category to get corresponding emission factor'
        )
    }
  }

  private calculateCarbonEmission({
    consumptionPerYear,
    emissionFactor
  }: CalculateCarbonEmissionArgs): number {
    return consumptionPerYear * emissionFactor
  }
}
