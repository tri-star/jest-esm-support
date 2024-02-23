import { jest } from '@jest/globals'

jest.unstable_mockModule('@/libs/sample-func', () => {
  return {
    sampleFunc: () => 'mocked'
  }
})
