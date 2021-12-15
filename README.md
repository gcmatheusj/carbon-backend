## Installing Dependencies

First, install the dependencies:

```bash
yarn
```

## Running the Project

Then you can can run the development server:

```bash
yarn dev
```

## Running the tests

You can run jest tests:

```bash
yarn test
```

## API Endpoints

POST http://localhost:3001/carbon-emission-calculator - calculate carbon emission:

### Body
```
{
  "category": "natural_gas",
  "consumptionPerYear": 10,
}
```