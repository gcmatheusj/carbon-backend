import request from 'supertest'

import { app } from '../..'

describe('Carbon Emission Routes', () => {
  describe('POST /carbon-emission-calculator', () => {
    it('should return 400 when try to calculate with missing params', async () => {
      await request(app)
        .post('/carbon-emission-calculator')
        .send({
          category: 'electricity'
        })
        .expect(400)

      await request(app)
        .post('/carbon-emission-calculator')
        .send({
          consumptionPerYear: 1
        })
        .expect(400)
    })

    it('should return 400 with invalid category', async () => {
      await request(app)
        .post('/carbon-emission-calculator')
        .send({
          category: 'invalid_category',
          consumptionPerYear: 10
        })
        .expect(400)
    })

    it('should return 200 with valid params', async () => {
      await request(app)
        .post('/carbon-emission-calculator')
        .send({
          category: 'natural_gas',
          consumptionPerYear: 10
        })
        .expect(200)
    })
  })
})
