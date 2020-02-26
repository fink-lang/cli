
module.exports = {
  testEnvironment: 'node',
  setupFiles: [],
  moduleFileExtensions: ['js', 'fnk'],
  transform: {'^.+\\.fnk$': ['<rootDir>/build/lib/fink-jest.js']},
  transformIgnorePatterns: ['.+/node_modules/', '<rootDir>/build/'],

  modulePathIgnorePatterns: ['<rootDir>/build/'],

  testMatch: ['<rootDir>/**/*.test.fnk'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/'],

  timers: 'fake',

  clearMocks: true,
  resetMocks: false,

  collectCoverage: true,
  // coverageProvider: 'v8',
  collectCoverageFrom: ['<rootDir>/src/**/*.fnk'],
  coverageDirectory: './build/cov',
  coverageReporters: ['lcov'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
