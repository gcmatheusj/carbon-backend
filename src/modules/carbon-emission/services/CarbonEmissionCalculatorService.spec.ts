import { CarbonEmissionCalculatorService } from './CarbonEmissionCalculatorService'

interface SutTypes {
  sut: CarbonEmissionCalculatorService
}

const makeSut = (): SutTypes => {
  const sut = new CarbonEmissionCalculatorService()

  return {
    sut
  }
}

describe('CarbonEmissionCalculatorService', () => {
  it('should be able to calculate carbon emission for electricity category', () => {
    const { sut } = makeSut()

    const carbonEmission = sut.execute({
      category: 'electricity',
      consumptionPerYear: 10
    })

    expect(carbonEmission).toBe(7)
  })

  it('should be able to calculate carbon emission for natural gas category', () => {
    const { sut } = makeSut()

    const carbonEmission = sut.execute({
      category: 'natural_gas',
      consumptionPerYear: 10
    })

    expect(carbonEmission).toBe(66)
  })
})
