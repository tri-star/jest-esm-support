const esModules = ['@middy'].join('|')

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest/presets/default-esm',
  clearMocks: true,
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/src/libs/jest/setup-mock.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.ts?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: [`node_modules/(?!${esModules})`],
}
