
module.exports = {
  setupFiles: [],
  moduleFileExtensions: ['js', 'fnk'],
  transform: {'^.+\\.fnk$': ['<rootDir>/build/lib/fink-jest.js']},
  transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/'],

  modulePathIgnorePatterns: ['<rootDir>/build/'],

  testMatch: ['<rootDir>/**/*.test.*'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/'],

  timers: 'fake',

  clearMocks: true,
  resetMocks: false,

  collectCoverage: false,
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
